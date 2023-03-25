<template>
  <div class="home-page">
    <header>
      <h1>大数据可视化</h1>
    </header>
    <section class="container ignore-container">
      <section class="item-left">
        <PreviewOne class="item-page" />
        <PreviewTwo class="item-page" />
      </section>
      <section class="item-center">
        <PreviewMapPage />
      </section>
      <section class="item-right">
        <PreviewThree class="item-page" />
        <PreviewFour class="item-page" />
      </section>
    </section>
  </div>
</template>

<script setup>
import PreviewOne from "@/components/PreviewOne.vue";
import PreviewTwo from "@/components/PreviewTwo.vue";
import PreviewThree from "@/components/PreviewThree.vue";
import PreviewFour from "@/components/PreviewFour.vue";
import PreviewMapPage from "@/components/PreviewMapPage.vue";
</script>

<style lang="scss" scoped>
body {
  background-color: #161522;
}
.home-page {
  width: 100%;
  height: 100%;
  padding: 0 20px;
  background-color: #161522;
  color: #fff;
  box-sizing: border-box;
}
header {
  height: 1rem;
  width: 100%;
  h1 {
    font-size: 0.375rem;
    color: #fff;
    text-align: center;
    line-height: 1rem;
  }
}
.ignore-container {
  // 最大最小宽度设置
  min-width: 1200px;
  max-width: 2048px;
  margin: 0 auto;
}
.container {
  padding: 0.125rem 0.125rem 0;
  // 设置flex布局
  display: flex;
  .item-left,
  .item-right {
    flex: 3;
  }
  .item-center {
    flex: 5;
    // height: 840px;
    padding: 0.125rem;
    margin: 8px;
  }
}
.item-page {
  height: 410px;
  margin: 8px;
  background-color: #222733;
  border-radius: 12px;
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
