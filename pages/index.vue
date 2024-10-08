<template>
    <div class="grid-container">
      <div class="masonry">
<img :src="item.urls.small" alt="" v-for="item in photos" :key="item.id" loading="lazy" @click="handleClick(item)" />
      </div>
      <div v-if="photos.length > 0 && photos.length < total">
        <button class="btn" @click="photoStore.loadMore()"> Load more </button>
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
  openModal(item.urls.thumb, item.user.name, item.user.location, item.slug);
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

  img {
    width: 100%;
    display: block;
    border-radius: 5px;
    margin-bottom: 20px;
    break-inside: avoid;
    transition: all 0.3s ease;
    cursor: pointer;
    transform: translateY(0);
    animation: fadeInUp 0.5s ease-out;

    &:hover {
      transform: scale(1.05);
    }
  }

  @include landscapeSet {
    columns: 3;
  }
}

button {
      margin: 3rem auto;
    }
</style>