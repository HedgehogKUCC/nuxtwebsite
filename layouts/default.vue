<script setup lang="ts">
import GoTop from "~/components/GoTop.vue";

useSeoMeta({
  title: '展誠的網站',
  description: '展誠的網站',
  ogTitle: '展誠的網站',
  ogDescription: '展誠的網站',
})
</script>

<template>
<div>
  <NuxtRouteAnnouncer />
  <Header />
  <NuxtPage />
  <Footer />
  <GoTop />
</div>
</template>

<style scoped>

</style>