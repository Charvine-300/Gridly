<template>
    <div class="app-container">
        <Header />
        <Search />
        <slot />
    </div>
</template>

<script setup lang="ts">
import Header from '~/components/Header.vue';
import Search from '~/components/Search.vue';

</script>

<style lang="scss" scoped>
.app-container {
    min-height: 35vh;
    position: relative;
    background-color: $paleBlue;
}
</style>