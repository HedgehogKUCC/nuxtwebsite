<script setup lang="ts">

</script>

<template>
<section class="introduction">
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
  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  @include media-breakpoint-up(xl) {
    padding: 0 0 0 60px;
    flex-direction: row;
    justify-content: flex-end;
  }

  &-content {
    padding: 40px;
    max-width: 430px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @include media-breakpoint-up(xl) {
      margin-right: 10px;
      padding: 10px;
      display: block;
    }

    h2 {
      margin: 0 0 24px;
      color: var(--cus-color-primary-900);

      @include media-breakpoint-up(sm) {
        font-size: var(--el-font-size-extra-large);
      }
    }

    p {
      margin: 0 0 8px;
      padding-left: 2px;
      color: var(--cus-color-primary-900);
      font-size: var(--el-font-size-extra-small);

      @include media-breakpoint-up(sm) {
        font-size: var(--el-font-size-base);
      }
    }

    span {
      padding-left: 2px;
      color: var(--cus-color-primary-400);
      font-size: var(--el-font-size-extra-small);

      @include media-breakpoint-up(sm) {
        font-size: var(--el-font-size-base);
      }
    }

    strong {
      background-image: url('/images/mark.png');
      background-repeat: no-repeat;
      background-position: 0 100%;
      color: var(--cus-color-primary-900);
      font-size: var(--el-font-size-extra-small);

      @include media-breakpoint-up(sm) {
        font-size: var(--el-font-size-base);
      }
    }
  }

  &-icons {
    margin-top: 24px;
    display: flex;
    align-items: center;

    @include media-breakpoint-up(xl) {
      margin-top: 60px;
    }

    a {
      display: block;
    }

    .bi {
      font-size: var(--el-font-size-base);
      color: var(--cus-color-primary-600);

      @include media-breakpoint-up(sm) {
        font-size: var(--el-font-size-extra-large);
      }
    }
  }

  .el-image {
    max-width: 1154px; width: 100%;
  }
}
</style>