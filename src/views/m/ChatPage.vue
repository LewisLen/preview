<template>
  <div class="chat-content">
    <div class="chat-header">xxx</div>
    <div class="chat-container">
      <p
        v-for="(item, index) in data.chatMsg"
        :key="index"
        class="chat-container-p"
      >
        <span>{{ item.user }} </span>在{{ item.msgDate }}时说：<span
          class="chat-msg"
          >{{ item.msg }}</span
        >
      </p>
    </div>
    <div class="chat-input-footer">
      <div class="footer-content">
        <input
          v-model="chatContent"
          :rows="2"
          type="textarea"
          placeholder="新消息"
          class="chat-input"
        />
        <button type="primary" @click="sendMsg" class="chat-button"></button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { io } from "socket.io-client";
import { onMounted, ref, reactive } from "vue";
import { baseURL } from "@/assets/js/constant";

const socket = io(
  baseURL // 'ws://127.0.0.1:3030'
);
const chatContent = ref("");

const data = reactive({
  chatMsg: [],
});
// toRefs为了能使reactive对象能够被结构
// const refData = toRefs(data);

onMounted(() => {
  socket.on("connection", (socket) => {
    console.log("建立链接成功", socket.request);
  });
  socket.on("serve-send-msg", (res) => {
    data.chatMsg.push(res);
  });
  socket.on("hello", (res) => {
    console.log("#hello: ", res);
  });
  socket.on("disconnect", () => {
    console.log("断开连接");
  });
});

const sendMsg = () => {
  console.log(chatContent.value);
  if (chatContent.value) {
    socket.emit("client-send-msg", chatContent.value);
  }
};
</script>

<style>
.chat-content {
  width: 750px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
.chat-header {
  height: 60px;
  background-color: #fdfdfe;
  text-align: center;
  line-height: 60px;
}
.chat-container {
  flex: 1;
  overflow: auto;
  background-color: #f9f9f9;
  border-top: 1px solid #ededed;
  border-bottom: 1px solid #ededed;
}
.chat-container-p {
  margin-top: 10px;
}
.chat-msg {
  background-color: #a9e97a;
  border-radius: 6px;
  padding: 6px;
  color: #333;
}
.chat-input-footer {
  display: flex;
  height: 100px;
  background-color: #fdfdfe;
}
.footer-content {
  padding: 24px 20px;
  height: 100%;
  width: 100%;
  display: flex;
}
.chat-input {
  border: 1px solid #cdcdcd;
  border-radius: 40px;
  height: 60px;
  width: 456px;
  text-indent: 2em;
}
.chat-button {
  height: 60px;
  width: 60px;
  background: url("../../assets/send.png") center center no-repeat;
  background-size: contain;
}
</style>
