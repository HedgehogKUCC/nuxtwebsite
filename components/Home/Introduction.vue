<script setup lang="ts">

</script>

<template>
<section class="introduction d-flex justify-content-end align-items-center">
  <div class="introduction-content">
    <el-text tag="h2">嗨！我是 展誠</el-text>
    <el-text tag="p">
      具有 4 年經驗的
      <el-text tag="strong">全端工程師</el-text>
    </el-text>
    <el-text tag="p" class="mb-3">熱衷技術和內在成長</el-text>
    <el-text tag="span">FRONTEND / BACKEND</el-text>
    <div class="introduction-icons">
      <a href="https://github.com/HedgehogKUCC" target="_blank" title="GitHub" class="me-3">
        <BootstrapIcon name="github" />
      </a>
      <a href="https://medium.com/conrad-ku" target="_blank" title="Medium">
        <BootstrapIcon name="medium" />
      </a>
    </div>
  </div>
  <el-image src="/images/home-banner.jpg" fit="cover" alt="" />
</section>
</template>

<style scoped lang="scss">
.introduction {
  max-width: 1920px;

  &-content {
    max-width: 430px; width: 100%; margin-right: 10px;

    h2 {
      margin: 0 0 24px;
      font-size: var(--el-font-size-extra-large);
      color: var(--cus-color-primary-900);
    }

    p {
      margin: 0 0 8px;
      padding-left: 2px;
      font-size: var(--el-font-size-base);
      color: var(--cus-color-primary-900);
    }

    span {
      padding-left: 2px;
      color: var(--cus-color-primary-400);
    }

    strong {
      background-image: url('/images/mark.png');
      background-repeat: no-repeat;
      background-position: 0 100%;
      color: var(--cus-color-primary-900);
    }
  }

  &-icons {
    margin-top: 60px;
    display: flex;
    align-items: center;

    a {
      display: block;
    }

    .bi {
      font-size: var(--el-font-size-extra-large);
      color: var(--cus-color-primary-600);
    }
  }

  .el-image {
    max-width: 1154px; width: 100%;
  }
}
</style>