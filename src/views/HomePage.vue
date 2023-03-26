<template>
  <PreviewHeader></PreviewHeader>
  <router-view />
</template>

<script setup lang="ts">
import PreviewHeader from "@/components/PreviewHeader.vue";

import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
import axios from "@/utils/axios";
// const currentInstance = getCurrentInstance();
// const { $http } = currentInstance.appContext.config.globalProperties;
const router = useRouter();

function query() {
  axios({
    url: "/users/query",
    method: "GET",
    headers: { isHideLoading: true },
  })
    .then((res) => {
      if (!res.userName) {
        setTimeout(() => {
          router.push({
            name: "Login",
          });
        }, 3000);
      } else {
        ElMessage.success(`Hello,${res.userName}`);
      }
    })
    .catch((err) => {
      ElMessage.warning("会话已过期，请重新登录");
      console.log(err);
      setTimeout(() => {
        router.push({
          name: "Login",
        });
      }, 3000);
    });
}

onMounted(() => {
  query();
});
</script>

<style>
.box {
  width: 100%;
  height: 100%;
}
.form-content {
  width: 400px;
  height: 300px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-200px, -150px);
}
</style>
