<script setup>
import { ref, watch } from "vue";
const x = ref(0);
const y = ref(0);
// 多个来源组成的数组
watch([x, () => y.value], (newX, newY) => {
  console.log(`x is ${newX} and y is ${newY}`);
});
const question = ref("");
const answer = ref("aaaab");

// 可以直接侦听一个 ref
watch(
  question,
  (newQuestion, oldQuestion) => {
    console.log("newQuestion", newQuestion);
    console.log("oldQuestion", oldQuestion);
    if (newQuestion.indexOf("?") > -1) {
      answer.value = "Thinking...";
      try {
        setTimeout(() => {
          answer.value = "Len" + newQuestion;
        }, 2000);
        // const res = await fetch("https://yesno.wtf/api");
        // answer.value = (await res.json()).answer;
      } catch (error) {
        answer.value = "Error! Could not reach the API. " + error;
      }
    }
    console.log(answer.value);
  },
  { immediate: true }
);
</script>

<template>
  <p>
    Ask a yes/no question:
    <input v-model="question" />
  </p>
  <p>{{ answer }}</p>
  <div>
    x值：<input v-model="x" />
    <p></p>
    y值：<input v-model="y" />
  </div>
</template>
