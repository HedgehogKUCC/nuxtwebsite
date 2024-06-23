<script setup lang="ts">
import { paginationProps } from "element-plus";
import {Pagination} from "swiper/modules";

const { data: carousels } = await useFetch('/api/carousel');

const swiperConfig = {
  modules: [
    SwiperAutoplay,
  ],
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: true,
  loop: true,
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
        v-for="slide in carousels"
        :key="slide.id"
      >
        <a :href="slide.link" target="_blank" class="swiper-slide-image" :style="`background-image: url(${slide.image})`"></a>
        <a :href="slide.link" target="_blank" class="swiper-slide-title">{{ slide.title }}</a>
      </SwiperSlide>
    </Swiper>
  </div>
</section>
</template>

<style scoped lang="scss">
.article {
  padding: 120px 0;

  &-title {
    margin: 0 0 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--cus-color-primary-700);
    font-size: var(--el-font-size-large);
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

  //.el-carousel__item {
  //  background-position: 50% 50%;
  //  background-repeat: no-repeat;
  //  background-size: cover;
  //
  //  &-relative {
  //    display: block;
  //    position: relative;
  //    width: 100%;
  //    height: 100%;
  //  }
  //
  //  h3 {
  //    margin: 0;
  //    padding: 0 10px;
  //    display: flex;
  //    justify-content: center;
  //    align-items: center;
  //    position: absolute;
  //    bottom: 0;
  //    width: 100%;
  //    height: 40px;
  //    background-color: rgba(30, 30, 30, 0.3);
  //    color: var(--cus-color-primary-50);
  //    font-size: var(--el-font-size-base);
  //  }
  //}
}
</style>