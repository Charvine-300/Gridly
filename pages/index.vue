<template>
    <div class="grid-container">
      <div class="masonry">
<img :src="item.urls.small" alt="" v-for="item in photos" :key="item.id" loading="lazy" @click="handleClick(item)" />
      </div>
      <div v-if="photos.length > 0 && photos.length < total">
        <button class="load-more" @click="photoStore.loadMore"> Load more </button>
      </div>
    </div>
</template>

<script setup lang="ts">
import type { PhotosInterface } from '~/utils/types';

const photoStore = usePhotoStore();
const { error, photos, total } = storeToRefs(photoStore);

// Page title
useHead({
    title: "Beautiful free images & pictures | Gridly"
});

// Added custom layout
definePageMeta({
    layout: "backdrop"
})

onMounted(() => {
    photoStore.fetchPhotos();
})

const modalStore = useModalStore();

const openModal = modalStore.openModal;

const handleClick = (item: PhotosInterface) => {
  const name = `${item.user?.first_name} ${item.user?.last_name}`;

  openModal(item.urls.regular, name, item.user.location);
};
</script>

<style lang="scss" scoped>
.grid-container {
    position: absolute;
    width: 100%;
    margin: 0 auto;
}

.masonry {
  width: 80%;
  max-width: 1224px;
  margin: 3rem auto;
  columns: 1;
  column-gap: 30px;
  grid-template-rows: masonry;

  img {
    width: 100%;
    display: block;
    border-radius: 5px;
    margin-bottom: 20px;
    break-inside: avoid;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
      transform: scale(1.05);
    }
  }

  @include landscapeSet {
    columns: 3;
  }
}

.load-more {
  padding: 15px 30px;
  color: $white;
  border-radius: 4px;
  outline: none !important;
  cursor: pointer;
  display: block;
  margin: 3rem auto;
  border: none;
  background-color: $deepBlue;
  font-weight: 700;
  font-size: 1rem;

  transition: background-color 0.3s ease, transform 0.2s ease;

&:hover {
  background-color: lighten($deepBlue, 10%);
  transform: scale(1.05);
}

}
</style>