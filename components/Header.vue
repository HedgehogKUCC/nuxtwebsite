<script setup lang="ts">
import { DotLottieVue } from '@lottiefiles/dotlottie-vue';
import { ElMessageBox } from 'element-plus';
import type {AnchorHTMLAttributes} from "vue";

const route = useRoute();
const fullPath = route.fullPath;

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
  <input type="checkbox" name="mobile-menu" id="mobile-menu" class="mobile-menu" />
  <div class="container header-wrap">
    <a href="/" title="回首頁" class="header-logo">
      <DotLottieVue style="width: 100px; height: 100px;" autoplay loop src="https://lottie.host/c1858a42-23f4-4b0b-8655-2b07726b2c95/TSJoSaZ0Sw.json" />
      <el-text tag="h1">展誠</el-text>
    </a>
    <nav class="desktop-menu-list">
      <a href="/" :class="{ active: fullPath === '/' }">
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
    <label for="mobile-menu" class="mobile-menu-label">
      <BootstrapIcon name="list" />
      <BootstrapIcon name="x" />
    </label>
  </div>
  <ul class="mobile-menu-list">
    <li>
      <a href="/" :class="{ active: fullPath === '/' }">
        首頁
        <span class="fake top-line"></span>
        <span class="fake bottom-line"></span>
      </a>
    </li>
    <li>
      <a href="/works" class="three-word" @click.prevent="handlerClick">
        作品集
        <span class="fake top-line"></span>
        <span class="fake bottom-line"></span>
      </a>
    </li>
    <li>
      <a href="https://medium.com/conrad-ku" class="three-word" target="_blank">
        部落格
        <span class="fake top-line"></span>
        <span class="fake bottom-line"></span>
      </a>
    </li>
    <li>
      <a href="#service" class="four-word" @click.prevent="scrollToHref">
        服務項目
        <span class="fake top-line"></span>
        <span class="fake bottom-line"></span>
      </a>
    </li>
    <li>
      <a href="mailto:ccc908925@gmail.com#" class="three-word">
        聯絡我
        <span class="fake top-line"></span>
        <span class="fake bottom-line"></span>
      </a>
    </li>
  </ul>
</header>
</template>

<style lang="scss" scoped>
.header {
  border-bottom: solid 1px var(--cus-color-primary-200);
  box-shadow: var(--el-box-shadow-lighter);

  &-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @include media-breakpoint-up(xl) {
      justify-content: flex-start;
    }
  }

  &-logo {
    @include media-breakpoint-up(xl) {
      margin-right: 318px;
    }
  }

  h1 {
    font: 0 / 0 a;
    color: transparent;
    text-shadow: none;
    background-color: transparent;
    border: 0;
  }

  .bi-list::before {
    font-size: 40px;
  }

  .bi-x::before {
    display: none;
    font-size: 45px;
  }

  .desktop-menu-list,
  .mobile-menu-list {
    a {
      display: block;
      flex-basis: content;
      color: var(--cus-color-primary-900);
      text-decoration: none;
      position: relative;
      padding: 8px 12px;
      border: solid 1px transparent;

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

  .mobile-menu {
    display: none;

    &-label {
      display: inline;

      @include media-breakpoint-up(xl) {
        display: none;
      }
    }

    &-list {
      margin: 0;
      padding: 40px 0;
      position: relative;
      z-index: 100;
      display: none;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      list-style: none;
      border-top: solid 1px var(--cus-color-primary-200);

      @include media-breakpoint-up(xl) {
        display: none;
      }

      li:not(:last-child) {
        margin-bottom: 24px;
      }
    }

    &:checked {
      ~ .mobile-menu-list {
        display: flex;
      }

      ~ .header-wrap {
        .bi-list::before {
          display: none;
        }

        .bi-x::before {
          display: inline-block;
        }
      }
    }
  }

  .desktop-menu-list {
    display: none;

    @include media-breakpoint-up(xl) {
      display: flex;
    }

    > a {
      &:not(:last-child) {
        margin-right: 40px;
      }
    }
  }
}
</style>