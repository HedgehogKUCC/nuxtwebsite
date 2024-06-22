<script setup lang="ts">
import { DotLottieVue } from '@lottiefiles/dotlottie-vue';
import { ElMessageBox } from 'element-plus';
import type {AnchorHTMLAttributes} from "vue";

const handlerClick = () => {
  ElMessageBox({
    message: '籌備中 ...',
    center: true,
    showConfirmButton: false,
    customClass: 'message-modal',
    customStyle: {
      padding: '50px'
    }
  })
      .catch(() => {})
}

const scrollToHref = (e: Event) => {
  const href = (e.target as AnchorHTMLAttributes).href;

  if (!href) {
    console.error('href is missing');
    return;
  }

  const id = href.split('#')[1];
  const section = document.getElementById(id);

  if (!section) {
    console.error(`#${id} is missing`);
    return;
  }

  const top = section.offsetTop;

  window.scrollTo({
    top,
    left: 0,
    behavior: "smooth"
  });
}
</script>

<template>
<header class="header">
  <div class="container d-flex align-items-center">
    <a href="/" title="回首頁" class="header-logo">
      <DotLottieVue style="width: 100px; height: 100px;" autoplay loop src="https://lottie.host/c1858a42-23f4-4b0b-8655-2b07726b2c95/TSJoSaZ0Sw.json" />
      <el-text tag="h1">展誠</el-text>
    </a>
    <nav class="d-flex">
      <a href="/" class="active">
        首頁
        <span class="fake top-line"></span>
        <span class="fake bottom-line"></span>
      </a>
      <a href="/works" class="three-word" @click.prevent="handlerClick">
        作品集
        <span class="fake top-line"></span>
        <span class="fake bottom-line"></span>
      </a>
      <a href="https://medium.com/conrad-ku" class="three-word" target="_blank">
        部落格
        <span class="fake top-line"></span>
        <span class="fake bottom-line"></span>
      </a>
      <a href="#service" class="four-word" @click.prevent="scrollToHref">
        服務項目
        <span class="fake top-line"></span>
        <span class="fake bottom-line"></span>
      </a>
      <a href="mailto:ccc908925@gmail.com#" class="three-word">
        聯絡我
        <span class="fake top-line"></span>
        <span class="fake bottom-line"></span>
      </a>
    </nav>
  </div>
</header>
</template>

<style lang="scss" scoped>
.header {
  border-bottom: solid 1px var(--cus-color-primary-200);
  box-shadow: var(--el-box-shadow-lighter);

  &-logo {
    margin-right: 318px;
  }

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