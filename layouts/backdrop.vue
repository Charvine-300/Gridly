<template>
    <div class="app-container">
        <Header />
        <Search v-if="showSearchbar" />
        <slot />
    </div>
</template>

<script setup lang="ts">
import Header from '~/components/Header.vue';
import Search from '~/components/Search.vue';

const searchStore = usePhotoStore();
const { showSearchbar } = storeToRefs(searchStore);

</script>

<style lang="scss" scoped>
.app-container {
    min-height: 25vh;
    position: relative;
    background-color: $paleBlue;
}
</style>