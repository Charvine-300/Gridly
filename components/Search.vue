<template>
    <div>
<div class="search-container">
    <img src="/assets/icons/search.svg" alt="search icon" class="search-img" />
    <input type="text" placeholder="Search for photos" />
</div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.search-container {
    width: 80%;
    max-width: 780px;
    margin: 0 auto;
    position: relative;
    background-color: $white;
    border-radius: 4px;
    padding: 15px;
    @include flexboxWrap(row, normal, center);
    gap: 1rem;
    box-shadow: 0 4px 8px $paleBlack, 0 6px 20px $paleBlack;

    .search-img {
        width: 28px;
        height: 34px;
    }

    input {
        border: none;
        font-size: 1rem;
        flex-grow: 1;
        color: $navyBlue;
        font-family: $openSans;

        &::placeholder {
        color: $navyBlue;
        font-weight: 700;
        opacity: 0.8;
  }

    }
}
</style>