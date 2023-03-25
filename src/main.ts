import { createApp, defineAsyncComponent } from "vue";
import ElementPlus from "element-plus";
import { createPinia } from "pinia";
import App from "./App.vue";
import "@/assets/style/reset.css";
import "element-plus/dist/index.css";
import router from "./router";
// import axios from "./utils/axios";
import Item from "./components/ItemList.vue";
import "@/assets/js/lib-flexible";

const pinia = createPinia();
const app = createApp(App);

// 废弃这种做法
// app.config.globalProperties.$http = axios;

// 捕获所有由子组件上抛而未被处理的错误
app.config.errorHandler = (err) => {
  console.log(err);
};

// 全局注册组件
app.component("item-list", Item);

// 全局注册异步组件
app.component(
  "item-info",
  defineAsyncComponent(() => import("./components/ItemInfo.vue"))
);

// 传值注入
app.provide("message", "Hello,Vue");

app.use(ElementPlus).use(pinia).use(router).mount("#app");
