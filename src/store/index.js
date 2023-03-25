import { defineStore } from "pinia";

// 第一个参数是应用程序中 store 的唯一 id
export const useUsersStore = defineStore("users", {
  // 为了完整类型推理，推荐使用箭头函数
  state: () => {
    return {
      // 所有这些属性都将自动推断出它们的类型
      count: 0,
      name: "Eduardo",
      isAdmin: true,
      items: [],
      hasChanged: true,
    };
  },
  actions: {
    increment() {
      this.count++;
    },
    randomizeCounter() {
      this.count = Math.round(100 * Math.random());
    },
  },
  getters: {
    doubleCount: (state) => state.count * 2,
  },
});
