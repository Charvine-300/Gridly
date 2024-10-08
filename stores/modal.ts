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
    slug: "",
  }),

  // Actions: Methods that mutate the state or perform business logic
  actions: {
    openModal(photo: string, title: string, location: string, slug: string) {
      this.isModalOpen = true;

      this.photo = photo;
      this.title = title;
      this.location = location;
      this.slug = slug;
    },
    closeModal() {
      this.$reset();
    },
  },
});
