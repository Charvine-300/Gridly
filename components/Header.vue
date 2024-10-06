<template>
    <header>
        <div class="logo">
            <img src="/assets/icons/logo.svg" alt="header logo" />
            <h1>Gridly</h1>
        </div>
    </header>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
header {
    background-color: $paleBlue;
    // position: fixed;
    padding: 20px 0;
    width: 100%;

    .logo {
        @include flexboxWrap(row, center, center);
        width: fit-content;
        margin: 0 auto;

        img {
            width: 32px;
            height: 32px;
            margin-right: 10px;
        }

        h1 {
          color: $navyBlue;
        }
    }

    
}
</style>