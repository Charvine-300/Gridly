<template>
    <div class="card">
      <img :src="img" :alt="title" loading="eager" />
      <div class="details-cover">
        <div class="img-details">
<h3> {{ title }} </h3>
<p> {{ location ?? "No stated location" }} </p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps({
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
  });
  </script>
  
  <style lang="scss" scoped>
  .card {
    position: relative;
    width: fit-content;
    height: auto;
    border-radius: 5px;
    animation: fadeInUp 0.5s ease-out;
  
    img {
    width: 100%;
    display: block;
    border-radius: 5px;
    min-height: 100px;
  }
  
    .details-cover {
  position: absolute;
  border-radius: 5px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 70%, rgba(0, 0, 0, 0.9) 100%);
}

.img-details {
    position: absolute;
    bottom: 5%;
    left: 5%;
    color: $white;
    text-transform: capitalize;

    h3 {
      margin: 0;
      font-weight: 500;
    }

    p {
      margin: 0;
      font-size: 0.65rem;
      opacity: 1;
      font-weight: 400;
      text-wrap: wrap;
      font-style: italic;
    }
}

  }
  </style>
  