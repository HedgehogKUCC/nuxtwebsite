<script setup lang="ts">
import type { NuxtError } from '#app';

const props = defineProps({
  error: Object as () => NuxtError
})
</script>

<template>
<Header />
<section class="error">
  <h2>{{ error?.statusCode }}</h2>
  <p>{{ error?.message }}</p>
</section>
<Footer />
</template>

<style scoped lang="scss">
.error {
  padding: 160px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    margin: 0 0 16px;
    font-size: var(--el-font-size-extra-large);
  }

  p {
    margin: 0;
    font-size: var(--el-font-size-medium);
  }
}
</style>