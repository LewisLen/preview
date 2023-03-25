<template>
  <div class="demo">
    <!-- <demo-he testMsg="vue3的props使用" :msg="message" @hello="sayHello">
      <template v-slot:sss>
        <span>插槽</span>
      </template>
    </demo-he> -->
    <br />
    {{ person.job }}
    <input type="text" v-model="person.job" />
    <input v-model="num" />
    <br />
    {{ person.msg }}
    <button @click="changeNum">改变数字</button>
    <button @click="changeMsg">改变msg</button>
  </div>
</template>

<script setup>
import { ref, reactive, computed, watch } from "vue";
// import DemoHe from "../components/DemoHe.vue";

// const message = ref("传递数据");

// const sayHello = (val) => {
//   console.log("从子组件中拿到的数据,", val);
// };
const person = reactive({
  fname: "L",
  lname: "Y",
  age: 18,
  msg: "你好",
});

let num = ref(0);
let tempNum = ref(0);

const changeNum = () => {
  tempNum.value++;
};
const changeMsg = () => {
  person.msg += "!";
};

person.job = computed({
  get() {
    return person.fname + "-" + person.lname;
  },
  set(val) {
    const tempName = val.split("-");
    person.fname = tempName[0];
    person.lname = tempName[1];
  },
});

watch(
  [num, tempNum],
  (newValue, oldValue) => {
    console.log("watch --- num --- tempNum");
    // watch多个数据时，newValue和oldValue也是数组
    console.log("newValue--", newValue);
    console.log("oldValue--", oldValue);
  },
  {
    immediate: true,
    deep: true,
  }
);

// 1. 监听reactive定义的响应式数据，没法正确获取oldValue，只能拿到newValue
// 2. 相对于vue2的watch，嵌套的对象也能直接监听
// 3. 但需要监听对象里单个属性时，需要用返回值表示
watch(person, (newValue, oldValue) => {
  console.log("watch---person");
  console.log("newValue--", newValue);
  console.log("oldValue--", oldValue);
});
// watch(
//   () => person.msg,
//   (newValue, oldValue) => {
//     console.log("watch---msg");
//     console.log("newValue--", newValue);
//     console.log("oldValue--", oldValue);
//   }
// );
</script>
