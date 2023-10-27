<template>
  <div class="mei-records">
    <h3>分数一览表</h3>
    <div
      id="mei-language-line"
      class="mei-language-line"
      ref="meiLanguageLine"
    ></div>
  </div>
</template>

<script setup>
import * as echarts from "echarts";
import { onMounted } from "vue";

console.log("分数");
//声明周期函数，自动执行初始化
onMounted(() => {
  init();
});

function init() {
  var chartDom = document.getElementById("mei-language-line");
  var myChart = echarts.init(chartDom);
  var option;

  option = {
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["语文", "数学", "英语", "物理", "化学", "地理"],
    },
    grid: {
      left: "3%",
      right: "5%",
      bottom: "3%",
      containLabel: true,
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [
        "F305二月考",
        "F305三月考",
        "F305期中考",
        "F305五月考",
        "F305期末考",
        "F606十月考",
      ],
      interval: 0,
      axisLabel: {
        interval: 0,
        formatter: function (value) {
          var str = "";
          var num = 4; //每行显示字数
          var valLength = value.length; //该项x轴字数
          var rowNum = Math.ceil(valLength / num); // 行数

          if (rowNum > 1) {
            for (var i = 0; i < rowNum; i++) {
              var temp = "";
              var start = i * num;
              var end = start + num;

              temp = value.substring(start, end) + "\n";
              str += temp;
            }
            return str;
          } else {
            return value;
          }
        },
      },
    },
    yAxis: {
      type: "value",
      min: 0,
      max: 150,
    },
    series: [
      {
        name: "语文",
        type: "line",
        data: [89, 89, 95, 92, 102.5, 94],
      },
      {
        name: "数学",
        type: "line",
        data: [65, 57, 60, 41, 50, 43],
      },
      {
        name: "英语",
        type: "line",
        data: [55, 53.5, 48.5, 54, 61.5, 70],
      },
      {
        name: "物理",
        type: "line",
        data: [32, 8, 31, 30, 35, 26],
      },
      {
        name: "化学",
        type: "line",
        data: [22, 35, 66, 46, 61, 64],
      },
      {
        name: "地理",
        type: "line",
        data: [65, 62, 86, 69, 69, 86],
      },
    ],
  };

  option && myChart.setOption(option);
  window.onresize = function () {
    console.log("resize");
    //自适应大小
    myChart.resize();
  };
}
</script>

<style lang="scss" scoped>
.mei-language-line {
  width: 98%;
  height: 600px;
}
</style>
