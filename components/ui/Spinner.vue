<template>
  <div class="spinner" role="status"></div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.spinner {
  border: 2px solid $paleWhite;
  border-top-color: $white;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  animation: spin 0.75s linear infinite;
}
</style>
