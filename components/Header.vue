<script setup lang="ts">
import { DotLottieVue } from '@lottiefiles/dotlottie-vue';
</script>

<template>
<div class="header">
  <el-container direction="horizontal" class="container align-items-center">
    <el-header height="auto">
      <a href="/" title="回首頁">
        <DotLottieVue style="width: 100px; height: 100px;" autoplay loop src="https://lottie.host/c1858a42-23f4-4b0b-8655-2b07726b2c95/TSJoSaZ0Sw.json" />
        <el-text tag="h1">展誠</el-text>
      </a>
    </el-header>
    <nav class="d-flex">
      <a href="#" class="active">
        首頁
        <span class="fake top-line"></span>
        <span class="fake bottom-line"></span>
      </a>
      <a href="#" class="three-word">
        作品集
        <span class="fake top-line"></span>
        <span class="fake bottom-line"></span>
      </a>
      <a href="#" class="three-word">
        部落格
        <span class="fake top-line"></span>
        <span class="fake bottom-line"></span>
      </a>
      <a href="#" class="four-word">
        服務項目
        <span class="fake top-line"></span>
        <span class="fake bottom-line"></span>
      </a>
      <a href="#" class="three-word">
        聯絡我
        <span class="fake top-line"></span>
        <span class="fake bottom-line"></span>
      </a>
    </nav>
  </el-container>
</div>
</template>

<style lang="scss" scoped>
.el-header {
  margin-right: 318px;
  padding: 0;
}

.header {
  border-bottom: solid 1px var(--cus-color-primary-200);
  box-shadow: var(--el-box-shadow-lighter);

  h1 {
    font: 0 / 0 a;
    color: transparent;
    text-shadow: none;
    background-color: transparent;
    border: 0;
  }

  nav > a {
    display: block;
    flex-basis: content;
    color: var(--cus-color-primary-900);
    text-decoration: none;
    position: relative;
    padding: 8px 12px;
    border: solid 1px transparent;

    &:not(:last-child) {
      margin-right: 40px;
    }

    &.active,
    &:hover {
      border: solid 1px var(--cus-color-primary-500);

      &::before,
      &::after,
      > .fake {
        content: '';
        position: absolute;
        height: 1px;
        background: #FFFFFF;
      }

      &::before,
      &::after {
        width: 19px;
        top: 8px;
      }

      &::before {
        transform-origin: 0 0 0;
        transform: rotate(90deg);
        left: 0;
      }

      &::after {
        transform-origin: 100% 100% 0;
        transform: rotate(-90deg);
        right: -1px;
      }

      > .top-line,
      > .bottom-line {
        width: 42px;
        left: 7px;
      }

      &.three-word {
        > .top-line,
        > .bottom-line {
          width: 58px;
        }
      }

      &.four-word {
        > .top-line,
        > .bottom-line {
          width: 74px;
        }
      }

      > .top-line {
        top: -1px;
      }

      > .bottom-line {
        bottom: -1px;
      }
    }
  }
}
</style>