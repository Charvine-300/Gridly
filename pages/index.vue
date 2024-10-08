<template>
    <div class="grid-container">
      <LoadingCards v-if="loading" />
      <div v-else-if="!loading && photos.length > 0">
        <div class="masonry">
          <div class="card-container" v-for="item in photos" :key="item.id" @click="handleClick(item)" >
            <!-- <img :src="item.urls.small" alt=""  loading="eager" /> -->
             <Card :img="item.urls.small" :title="item.user.name" :location="item.user.location" />
          </div>
        </div>
        <div v-if="photos.length > 0 && photos.length < total">
          <button class="btn" @click="photoStore.loadMore()">
      <Spinner v-if="moreLoading" />
      <span v-if="!moreLoading">Load more</span>
    </button>
        </div>
      </div>
      <div class="error" v-if="error"> 
<img src="/assets/icons/error.svg" alt="error icon" />
<p> {{ error }} </p>
      </div>
    </div>
</template>

<script setup lang="ts">
import Card from '~/components/ui/Card.vue';
import Spinner from '~/components/ui/Spinner.vue';
import LoadingCards from '~/components/ui/LoadingCards.vue';
import type { PhotosInterface } from '~/utils/types';

const photoStore = usePhotoStore();
const { error, photos, total, loading, moreLoading } = storeToRefs(photoStore);

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

.error {
min-height: 70vh;
@include flexboxWrap(column, center, center);

img {
  display: block;
  margin: 0 auto;
 width: 60%;
 max-width: 400px;
}

p {
  margin: 0;
  color: $navyBlue;
  font-weight: 700;
}
}

button {
      margin: 3rem auto;
    }
</style>