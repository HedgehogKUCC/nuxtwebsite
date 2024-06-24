<script setup lang="ts">
import { ElMessageBox } from 'element-plus';

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
</script>

<template>
<section id="service" class="service">
  <div class="container">
    <h2 class="service-title">
      <span class="decoration-line decoration-left-circle"></span>
      服務項目
      <span class="decoration-line decoration-right-circle"></span>
    </h2>
    <ul class="service-list">
      <li class="service-list-1">
        <div class="service-list-icon">
          <BootstrapIcon name="code-slash" />
        </div>
        <h3>切版服務</h3>
      </li>
      <li class="service-list-2">
        <div class="service-list-icon">
          <BootstrapIcon name="filetype-js" />
        </div>
        <h3>前端開發</h3>
      </li>
      <li class="service-list-3">
        <div class="service-list-icon">
          <BootstrapIcon name="filetype-php" />
        </div>
        <h3>後端開發</h3>
      </li>
      <li class="service-list-4">
        <div class="service-list-icon">
          <BootstrapIcon name="chat-square-text" />
        </div>
        <h3>技術諮詢</h3>
      </li>
    </ul>
    <h4>想要合作或瞭解更多？</h4>
    <div class="service-link">
      <a href="/services" title="點擊瞭解詳細服務內容" @click.prevent="handlerClick">
        詳細內容與合作流程
        <BootstrapIcon name="caret-right" />
      </a>
    </div>
  </div>
</section>
</template>

<style scoped lang="scss">
.service {
  padding: 80px 0;
  background-image: url("/images/homepage-services-bg.png");
  background-repeat: no-repeat;
  background-size: cover;

  @include media-breakpoint-up(sm) {
    padding: 120px 0;
  }

  h4 {
    margin: 0 0 24px;
    text-align: center;
    font-size: var(--el-font-size-medium);
    color: var(--cus-color-primary-700);

    @include media-breakpoint-up(sm) {
      margin: 0 0 40px;
    }
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

  &-list {
    margin: 0 0 40px;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    @include media-breakpoint-up(sm) {
      margin: 0 0 80px;
    }

    @include media-breakpoint-up(md) {
      justify-content: space-between;
    }

    &-icon {
      margin-bottom: 24px;
      width: 80px;
      height: 80px;
      text-align: center;
    }

    li {
      background-image: url("/images/service-item-bg.png");
      background-repeat: no-repeat;
      background-size: cover;
      width: 306px;
      height: 306px;
      border-radius: 16px;
      color: var(--cus-color-primary-50);
      flex-shrink: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      @include media-breakpoint-up(md) {
        width: 340px;
        height: 340px;
      }

      @include media-breakpoint-up(lg) {
        width: 230px;
        height: 230px;
      }

      @include media-breakpoint-up(xl) {
        width: 270px;
        height: 270px;
      }

      @include media-breakpoint-up(xxl) {
        width: 306px;
        height: 306px;
      }
    }

    &-1,
    &-2 {
      margin: 0 0 16px;

      @include media-breakpoint-up(lg) {
        margin: 0;
      }
    }

    &-3 {
      margin: 0 0 16px;

      @include media-breakpoint-up(md) {
        margin: 0;
      }
    }

    .bi {
      font-size: 65px;

      &-code-slash,
      &-chat-square-text {
        font-size: 70px;
      }
    }

    h3 {
      margin: 0;
      font-size: var(--el-font-size-medium)
    }
  }

  &-link {
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      padding: 16px 38px;
      text-decoration: none;
      background-color: var(--cus-color-primary-900);
      color: var(--cus-color-primary-50);
      font-size: var(--el-font-size-small);
      border-radius: 5px;

      .bi-caret-right::before {
        transition: transform 1s;
      }

      &:hover .bi-caret-right::before {
        transform: translateX(6px);
      }
    }
  }
}
</style>