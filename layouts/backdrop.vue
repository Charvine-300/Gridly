<template>
    <Download />
    <div class="app-container">
        <BackToTop :show="showButton" />
        <Header />
        <Search />
        <slot />
    </div>
</template>

<script setup lang="ts">
import Header from '~/components/Header.vue';
import Search from '~/components/Search.vue';
import Download from '~/components/Download.vue';
import BackToTop from '~/components/BackToTop.vue';

const showButton = ref(false);

  // Function to toggle button visibility based on scroll position
  const handleScroll = () => {
    showButton.value = window.scrollY > 300;
  };

    // Add event listener on mount and remove on unmount
    onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });

</script>

<style lang="scss" scoped>
.app-container {
    min-height: 35vh;
    position: relative;
    background-color: $paleBlue;
}
</style>