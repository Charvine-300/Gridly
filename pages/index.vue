<template>
    <div>

    </div>
</template>

<script setup lang="ts">
const search = usePhotoStore();

// Page title
useHead({
    title: "Beautiful free images & pictures | Gridly"
});

// Added custom layout
definePageMeta({
    layout: "backdrop"
})

onMounted(() => {
    search.fetchPhotos();
})
</script>

<style scoped>

</style>