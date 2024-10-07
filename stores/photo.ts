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
}

export const usePhotoStore = defineStore('Photos', {
    state: (): PhotoStore => ({
        showSearchbar: true,
        loading: false,
        error: "",
        page: 1,
        perPage: 8,
        searchResultsHeading: "",
        photos: [],
        total: 0  
    }),

   
  actions: {
    async fetchPhotos(term?: string, more = false) {
      // Reset error state
      this.error = ""; 
      this.loading = true;

      // Reset page
      if (!more) {
        this.page = 1;
        this.photos = [];
      }

        if (term) {
          // Set heading for API request loading and result when user searches
          this.showSearchbar = false;
          this.searchResultsHeading = `Searching for <span style="color: rgb(143, 164, 188); text-transform: capitalize;">"${term}"</span>`;
        }
    
      // Assign search term
      let searchTerm = term ?? 'africa';

      try {
        const response = await axios.get(`/api/unsplash?search=${searchTerm}&page=${this.page}&perPage=${this.perPage}`);
        
        // Store the fetched photos and stats in the store
        this.total = response.data.total;

        // Filter for necessary data
        // TODO - Fix issue with appending
        const existingPhotos = this.photos.map((photo) => {
          return JSON.parse(JSON.stringify(photo)); // Resolving the proxy
        });

        // Condition to load more or change results
        const mergedArray = [...existingPhotos, ...response.data.results];
        this.photos = more ? mergedArray : response.data.results;
        // console.log(mergedArray, ...this.photos);

        if (term) {
          this.searchResultsHeading = `Search results for <span style="color: rgb(143, 164, 188); text-transform: capitalize;">"${term}"</span>`;
        }

        this.loading = false;
      } catch (error) {
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
// TODO - Fix issue of search term being passed
      this.fetchPhotos(undefined, true);
    }
  },
})