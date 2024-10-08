<template>
  <div class="spinner-container">
    <div
      :class="[spinnerClasses, size ? `spinner-${size}` : 'spinner-8']"
      role="status"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  color?: string;
  size?: number;
}>();

const spinnerClasses = props.color
  ? `spinner-border-${props.color}`
  : 'spinner-border-black';
</script>

<style scoped lang="scss">
/* Custom animation for spinning */
.spinner-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.spinner-border-black {
  border-color: $navyBlue;
  border-top-color: transparent;
}

.spinner-8 {
  width: 2rem;
  height: 2rem;
}

/* Rounded and animated spin */
div[role="status"] {
  border-width: 4px;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  border-top-color: transparent;
}
</style>
