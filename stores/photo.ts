import axios from "axios";

interface SearchStore {
    searchTerm: string;
    showSearchbar: boolean;
    loading: boolean;
    error: string;
    page: number;
    perPage: number;
}

export const usePhotoStore = defineStore('Photos', {
    state: (): SearchStore => ({
        searchTerm: "africa",
        showSearchbar: true,
        loading: false,
        error: "",
        page: 1,
        perPage: 8
    }),

   
  actions: {
    async fetchPhotos() {
      // Reset error state
      this.error = ""; 
      this.loading = true;

      try {
        const response = await axios.get(`/api/unsplash?search=${this.searchTerm}&page=${this.page}&perPage=${this.perPage}`);
        
        // Store the fetched photos in the state
        console.log(response.data);

      } catch (error) {
        console.error('Error fetching photos:', error);
        this.error = 'Failed to fetch photos'; // Set the error state
      }
    },
  },
})