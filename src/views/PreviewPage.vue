<template>
  <div class="preview-home-page">
    <header class="preview-home-page__header">
      <h1 class="preview-home-page__title">大数据可视化</h1>
    </header>
    <section class="preview-container preview-container--main">
      <section class="preview-container--left">
        <PreviewOne class="preview-container__item" />
        <PreviewTwo class="preview-container__item" />
      </section>
      <section class="preview-container__center">
        <PreviewMapPage />
      </section>
      <section class="preview-container--right">
        <PreviewThree class="preview-container__item" />
        <PreviewFour class="preview-container__item" />
      </section>
    </section>
  </div>
</template>

<script setup lang="ts">
import PreviewOne from "@/components/PreviewOne.vue";
import PreviewTwo from "@/components/PreviewTwo.vue";
import PreviewThree from "@/components/PreviewThree.vue";
import PreviewFour from "@/components/PreviewFour.vue";
import PreviewMapPage from "@/components/PreviewMapPage.vue";
import "@/assets/js/lib-flexible";
import { onMounted, onBeforeUnmount } from "vue";

onMounted(() => {
  document.body.style.backgroundColor = "#161522";
});
onBeforeUnmount(() => {
  document.body.style.backgroundColor = "#fff";
});
</script>

<style lang="scss" scoped>
.preview-home-page {
  width: 100%;
  height: 100%;
  padding: 0 0.25rem;
  background-color: #161522;
  color: #fff;
  box-sizing: border-box;
  &__header {
    height: 1rem;
    width: 100%;
  }
  &__title {
    font-size: 0.375rem;
    color: #fff;
    text-align: center;
    line-height: 1rem;
  }
}
.preview-container {
  padding: 0.125rem 0.125rem 0;
  // 设置flex布局
  display: flex;
  &--left,
  &--right {
    flex: 3;
  }
  &__center {
    flex: 5;
    // height: 840px;
    padding: 0.125rem;
    margin: 8px;
  }
  &__item {
    height: 5.125rem;
    margin: 0.1rem;
    background-color: #222733;
    border-radius: 0.15rem;
  }
}
:deep(.chart) {
  height: 4.5rem;
}
:deep(h2) {
  height: 0.6rem;
  color: #fff;
  line-height: 0.6rem;
  text-align: center;
}
</style>
