<template>
    <div class="loading-card" :style="{ height: height }">
      <div class="loading-content"></div>
      <div class="loading-line line1"></div>
      <div class="loading-line line2"></div>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps({
    height: {
        type: String,
        required: true
    }
  })
  </script>
  
  <style lang="scss" scoped>
  .loading-card {
    width: 90%;
    background-color: $lightGray;
    border-radius: 8px;
    box-shadow: 0 2px 4px $paleBlack;
    padding: 16px;
    position: relative;
    margin-bottom: 20px;
    // break-inside: avoid;
  
    .loading-content {
      width: 100%;
      height: 80%;
      background-color: transparent;
      border-radius: 8px;
    }
  
    .loading-line {
        height: 12px;
      background-color: $lighterGray;
      margin: 8px 0;
      border-radius: 4px;
      animation: pulse 1.5s infinite;

      &:nth-child(1) {
        width: 30%;
      }
    }

    .line1 {
  width: 80%; /* Longer line */
}

.line2 {
  width: 60%; /* Shorter line */
}
  
    @keyframes pulse {
      0% {
        background-color: $lighterGray;
      }
      50% {
        background-color: $lighterGray;
      }
      100% {
        background-color: $lighterGray;
      }
    }
  }
  </style>
  