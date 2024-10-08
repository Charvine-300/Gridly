<template>
    <div class="share-container" v-if="isModalOpen">
<div class="photo-modal">
  <img src="/assets/icons/close.svg" alt="close icon" class="close-img" @click="closeModal" />
<div class="full-img">
    <img :src="photo" :alt="title" loading="lazy" />
</div>
<div class="image-details-container">
<div>
  <h4> {{ title }} </h4>
  <p> {{ location ?? "No stated location" }} </p>
</div>

<Spinner v-if="downloadLoading" />
<button class="btn" v-else @click="download">
    Download
</button>
</div>
</div>
    </div>
</template>

<script setup lang="ts">
import Spinner from './ui/Spinner.vue';
const modalStore = useModalStore();
const closeModal = modalStore.closeModal;
const { isModalOpen, photo, title, location, slug } = storeToRefs(modalStore)

const photoStore = usePhotoStore();
const download = () => photoStore.downloadImage(photo.value, slug.value);
const { downloadLoading } = storeToRefs(photoStore);
</script>

<style lang="scss" scoped>
.share-container {
    width: 100vw;
    min-height: 100vh;
    position: fixed;
    z-index: 50;
    background-color: $gray;
    @include flexboxWrap(column, center, center);
}

.close-img {
position: absolute;
cursor: pointer;
width: 2rem;
height: 2rem;
top: -3rem;
right: 0;

@include landscapeSet {
  right: -3rem;
  top: -2rem;
}
}

.photo-modal {
    width: 90%;
    max-width: 500px;
    max-height: 650px;
    position: relative;
    background-color: $white;
    border-radius: 4px;
    transform: translateY(0);
    animation: fadeInUp 0.5s ease-out;
    transition: none;
    @include flexboxWrap(column, normal, normal);

  .full-img {
    width: fit-content;
    margin: 1.5rem auto;
  }

  .image-details-container {
    width: 90%;
    margin: 1rem auto;
    text-transform: capitalize;
    @include flexboxWrap(row, space-between, center);

    h4 {
      color: $navyBlue;
      margin: 0;
    }

    p {
      margin: 0;
      font-size: 0.75rem;
      color: $gray;
      opacity: 1;
      font-weight: 600;
      text-wrap: wrap;
    }

    button {
      padding: 10px 20px;
    }
  }
}
</style>