import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/HomePage.vue";
import Login from "../views/LoginPage.vue";
import Chat from "../views/ChatPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/demo",
    name: "Demo",
    component: () => import("../views/DemoPage.vue"),
  },
  {
    path: "/",
    name: "Index",
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
    component: Chat,
    meta: {
      title: "聊天室",
    },
  },
  {
    path: "/preview",
    name: "Preview",
    component: () => import("../views/PreviewPage.vue"),
  },
  {
    path: "/404",
    name: "404",
    component: () => import("../views/ErrorPage.vue"),
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
  if (to.meta.title) {
    document.title = to.meta.title as string;
  }
  next();
});

export default router;
