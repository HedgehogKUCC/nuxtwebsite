<script setup lang="ts">

import {DotLottieVue} from "@lottiefiles/dotlottie-vue";
</script>

<template>
<footer class="footer">
  <div class="container">
    <div class="footer-wrap">
      <div class="footer-contact">
        <el-text tag="p" class="mb-1">如果想和我分享好文章</el-text>
        <el-text tag="p" class="mb-4">歡迎直接與我聯絡</el-text>
        <el-link type="info" href="mailto:ccc908925@gmail.com">ccc908925@gmail.com</el-link>
      </div>
      <div class="footer-link">
        <button type="button" class="mb-4">
          <el-link :underline="false" target="_blank" href="https://github.com/HedgehogKUCC">
            <BootstrapIcon name="github" class="me-3" /> GitHub
          </el-link>
        </button>
        <button type="button">
          <el-link :underline="false" target="_blank" href="https://medium.com/conrad-ku">
            <BootstrapIcon name="medium" class="me-3" /> Medium
          </el-link>
        </button>
      </div>
    </div>
  </div>
</footer>
</template>

<style lang="scss" scoped>
.footer {
  padding: 60px 0;
  background-image: url("/images/footer-bg-lg.jpg");
  background-size: cover;
  background-repeat: no-repeat;

  @include media-breakpoint-up(sm) {
    padding: 120px 0;
  }

  &-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @include media-breakpoint-up(sm) {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  &-contact {
    margin-bottom: 40px;

    @include media-breakpoint-up(sm) {
      margin-bottom: 0;
    }

    p,
    a {
      font-size: var(--el-font-size-small)
    }
  }

  &-link {
    display: flex;
    flex-direction: column;

    button {
      background-color: var(--cus-color-primary-50);
      border: solid 1px var(--cus-color-primary-400);
      border-radius: var(--el-border-radius-base);

      .el-link {
        padding: 20px 80px;

        @include media-breakpoint-up(sm) {
          padding: 20px 60px;
        }

        @include media-breakpoint-up(md) {
          padding: 20px 90px;
        }
      }

      &:hover {
        background-color: var(--cus-color-primary-900);
        border-color: var(--cus-color-primary-900);

        .el-link {
          color: var(--cus-color-primary-50);
        }
      }
    }
  }
}

@media (max-width: 375px) {
  .footer {
    background-image: url("/images/footer-bg.jpg");
  }
}
</style>