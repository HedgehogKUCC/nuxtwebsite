<script setup lang="ts">
import GoTop from "~/components/GoTop.vue";

useHead({
  script: [
    {
      innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5L59WC4S');`,
    }
  ]
})

useSeoMeta({
  title: '展誠的網站',
  description: '展誠的網站',
  ogTitle: '展誠的網站',
  ogDescription: '展誠的網站',
})
</script>

<template>
<div>
  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5L59WC4S"
                    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->
  <NuxtRouteAnnouncer />
  <Header />
  <NuxtPage />
  <Footer />
  <GoTop />
</div>
</template>

<style scoped>

</style>