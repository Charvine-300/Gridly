<template>
    <button v-if="show" class="back-to-top btn" @click="scrollToTop">
      <img src="/assets/icons/up.svg" alt="up icon" />
    </button>
  </template>
  
  <script setup lang="ts">  
  defineProps({
    show: {
        type: Boolean,
        required: true,
    }
  });


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  </script>
  
  <style scoped lang="scss">
  .back-to-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    padding: 10px;
    border-radius: 60px;
    transform: translateY(20px);
    z-index: 1000;

    img {
        width: 1.5rem;
        height: 1.2rem;
    }
  
    &.show {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
  }
  </style>
  