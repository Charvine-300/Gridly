import axios from "axios";

interface PhotoStore {
  showSearchbar: boolean;
  error: string;
  page: number;
  perPage: number;
  loading: boolean;
  searchResultsHeading: string;
  photos: PhotosInterface[];
  total: number;
  downloadLoading: boolean;
  moreLoading: boolean;
  searchTerm: string | undefined;
}

export const usePhotoStore = defineStore('Photos', {
    state: (): PhotoStore => ({
        showSearchbar: true,
        loading: true,
        error: "",
        page: 1,
        perPage: 8,
        searchResultsHeading: "",
        photos: [],
        total: 0,
        downloadLoading: false,
        moreLoading: false,
        searchTerm: undefined,
    }),

   
  actions: {
    async fetchPhotos(term?: string, more = false) {
      // Reset error state
      this.error = ""; 
    
      // Reset page
      if (!more) {
        this.page = 1;
        this.photos = [];
        this.loading = true;
      } else {
        this.moreLoading = true;
      }

        if (term) {
          this.searchTerm = term;
          // Set heading for API request loading and result when user searches
          this.showSearchbar = false;
          this.searchResultsHeading = `Searching for <span style="color: rgb(143, 164, 188); text-transform: capitalize;">"${term}"</span>`;
        }
    
      // Assign search term
      let searchTerm = this.searchTerm ?? 'africa';

      try {
        const response = await axios.get(`/api/unsplash?search=${searchTerm}&page=${this.page}&perPage=${this.perPage}`);
        
        if (response.data.results.length > 0) {
          // Store the fetched photos and stats in the store
          this.total = response.data.total;
  
          // Filter for necessary data
          const existingPhotos = this.photos.map((photo) => {
            return JSON.parse(JSON.stringify(photo)); // Resolving the proxy
          });
  
          // Condition to load more or change results
          const mergedArray = [...existingPhotos, ...response.data.results];
          this.photos = more ? mergedArray : response.data.results;
  
          if (term) {
            this.searchResultsHeading = `Search results for <span style="color: rgb(143, 164, 188); text-transform: capitalize;">"${term}"</span>`;
          }
        } else {
          this.error = `No photos found for "${searchTerm}". Try again.`;
           // Return search bar for user to try again
        this.showSearchbar = true;
        }

        this.loading = false;
        this.moreLoading =false;
      } catch (error) {
        this.loading = false;
        this.moreLoading =false;

        console.error('Error fetching photos:', error);
        this.error = 'Failed to fetch photos';
        
        // Return search bar for user to try again
        this.showSearchbar = true;
      }
    },
    async returnToSearch() {
      this.showSearchbar = true;
    },
    async loadMore() {
      this.page += 1;

      const searchText = this.searchTerm;
      this.fetchPhotos(searchText, true);
    },
    async downloadImage(imgLink: string, slug: string) {
      this.downloadLoading = true;

      try {
        const response = await axios({
          url: imgLink,
          method: 'GET',
          responseType: 'blob'
        });
        
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        const imgName = slug ? `${slug}.jpg` : 'download-unsplash-img.jpg';
        link.href = url;
        link.setAttribute('download', imgName);
        document.body.appendChild(link);
        link.click();

        window.URL.revokeObjectURL(url);
        document.body.removeChild(link);
      } catch (error) {
        console.error('Image download failed:', error);
      } finally {
        this.downloadLoading = false;
      }
    }
  },
})