// store/modalStore.ts
import { defineStore } from 'pinia';


export const useModalStore = defineStore('Modal', {
  // State: Holds the reactive properties
  state: () => ({
    isModalOpen: false,
    entity: "",
    photo: "",
    title: "",
    location: "",
  }),

  // Actions: Methods that mutate the state or perform business logic
  actions: {
    openModal(photo: string, title: string, location: string) {
      this.isModalOpen = true;

      this.photo = photo;
      this.title = title;
      this.location = location;
    },
    closeModal() {
      this.isModalOpen = false;
      this.photo = "";
      this.title = "";
      this.location = "";
    },
  },
});
