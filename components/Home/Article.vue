<script setup lang="ts">
const { data: carousels } = await useFetch('/api/carousel');
</script>

<template>
<section class="article">
  <div class="container">
    <h2 class="article-title">
      <span class="decoration-line decoration-left-circle"></span>
      精選文章
      <span class="decoration-line decoration-right-circle"></span>
    </h2>
    <el-carousel :interval="4000" type="card" height="300px" indicator-position="none">
      <el-carousel-item v-for="c in carousels" :key="c.id" :style="`background-image: url(${c.image})`">
        <a :href="c.link" target="_blank" class="el-carousel__item-relative">
          <h3>{{ c.title }}</h3>
        </a>
      </el-carousel-item>
    </el-carousel>
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

  .el-carousel__item {
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;

    &-relative {
      display: block;
      position: relative;
      width: 100%;
      height: 100%;
    }

    h3 {
      margin: 0;
      padding: 0 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 40px;
      background-color: rgba(30, 30, 30, 0.3);
      color: var(--cus-color-primary-50);
      font-size: var(--el-font-size-base);
    }
  }
}
</style>