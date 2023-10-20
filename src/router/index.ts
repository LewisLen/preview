import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/HomePage.vue";
import Login from "../views/LoginPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/AboutPage.vue"),
  },
  {
    path: "/chat",
    name: "Chat",
    component: () => import("../views/ChatPage.vue"),
    meta: {
      title: "聊天室",
    },
  },
  {
    path: "/preview",
    name: "Preview",
    component: () => import("../views/PreviewPage.vue"),
    meta: {
      title: "大数据图表",
    },
  },
  {
    path: "/count",
    name: "CountPage",
    component: () => import("../views/CountPage.vue"),
    meta: {
      title: "计算示例",
    },
  },
  {
    path: "/record",
    name: "Record",
    component: () => import("../views/SchoolRecords.vue"),
    meta: {
      title: "分数展示",
    },
  },
  {
    path: "/404",
    name: "404",
    component: () => import("../views/ErrorPage.vue"),
    meta: {
      title: "找不到页面",
    },
  },
  {
    path: "/:pathMatch(.*)",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  // TODO: 控制登陆，还可以从store中获取状态
  // const _token = sessionStorage.getItem("token") || "";
  // if (!_token) {
  //   router.push({
  //     name: "Login",
  //   });
  // }
  if (to.meta.title) {
    document.title = to.meta.title as string;
  }
  next();
});

export default router;
