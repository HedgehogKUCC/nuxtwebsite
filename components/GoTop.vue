<script setup lang="ts">
const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
</script>

<template>
<div class="goTop">
  <a href="#" @click.prevent="scrollTop">
    <BootstrapIcon name="caret-up-square-fill" />
  </a>
</div>
</template>

<style scoped lang="scss">
.goTop {
  display: none;

  @include media-breakpoint-up(lg) {
    display: block;
    position: fixed;
    bottom: 10px;
    right: 10px;
  }

  a {
    text-decoration: none;
    color: var(--cus-color-primary-900)
  }

  .bi-caret-up-square-fill {
    font-size: 50px;
  }
}
</style>