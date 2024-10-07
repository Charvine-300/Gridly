<template>
    <div class="share-container" v-if="isModalOpen">
<div class="photo-modal">
<div class="full-img">
    <img :src="photo" :alt="title" />
</div>
</div>
    </div>
</template>

<script setup lang="ts">
const modalStore = useModalStore();

const closeModal = modalStore.closeModal;

const { isModalOpen, photo, title, location } = storeToRefs(modalStore)
</script>

<style lang="scss" scoped>
.share-container {
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 50;
    background-color: $gray;
    @include flexboxWrap(row, center, center);
}

.photo-modal {
    width: 80%;
    max-width: 700px;
    // max-height: 600px;
    border-radius: 4px;
    @include flexboxWrap(column, normal, normal);

  .full-img {
    width: 100%;
    // max-height: 400px;
    
    img {
      width: 100%;
  height: 100%;
  object-fit: cover;
    }
  }
}
</style>