<script setup lang="ts">
const { data: articles } = await useFetch('/api/articles');

const swiperConfig = {
  modules: [
    SwiperAutoplay,
  ],
  slidesPerView: 1,
  autoplay: true,
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 10,
    }
  }
}
</script>

<template>
<section class="article">
  <div class="container">
    <h2 class="article-title">
      <span class="decoration-line decoration-left-circle"></span>
      精選文章
      <span class="decoration-line decoration-right-circle"></span>
    </h2>
    <Swiper v-bind="swiperConfig">
      <SwiperSlide
        v-for="article in articles"
        :key="article.id"
      >
        <a :href="article.link" target="_blank" class="swiper-slide-image" :style="`background-image: url(${article.image})`"></a>
        <a :href="article.link" target="_blank" class="swiper-slide-title">{{ article.title }}</a>
      </SwiperSlide>
    </Swiper>
  </div>
</section>
</template>

<style scoped lang="scss">
.article {
  padding: 80px 0;

  @include media-breakpoint-up(sm) {
    padding: 120px 0;
  }

  &-title {
    margin: 0 0 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--cus-color-primary-700);
    font-size: var(--el-font-size-large);

    @include media-breakpoint-up(sm) {
      margin: 0 0 80px;
    }
  }

  .swiper-slide {

    &-image,
    &-title {
      display: block;
      text-decoration: none;
    }

    &-image {
      height: 300px;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }

    &-title {
      margin: 4px 0 0;
      text-align: center;
      color: var(--cus-color-primary-900);
      font-size: var(--el-font-size-small);
    }
  }
}
</style>