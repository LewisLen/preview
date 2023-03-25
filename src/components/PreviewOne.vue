<template>
  <div>
    <h2>图表</h2>
    <div class="chart" id="oneChart">图标容器</div>
  </div>
</template>

<script setup>
import { reactive, onMounted } from "vue";
import * as echarts from "echarts";
import useGetData from "@/hooks/useGetData";

let xData = reactive([]);
let yData = reactive([]);

function setData(oneData) {
  // 横坐标数据
  xData = oneData.data.data.map((v) => v.title);
  // 纵坐标数据
  yData = oneData.data.data.map((v) => v.num);
}

onMounted(() => {
  // 初始化echarts
  let chartDom = document.getElementById("oneChart");
  let myChart = echarts.init(chartDom);
  useGetData("chartData1").then((res) => {
    setData(res);
    let options = {
      grid: {
        left: 5,
        top: 5,
        bottom: 20,
        containLabel: true,
      },
      // 设置柱状图
      xAxis: {
        type: "value",
        axisLabel: {
          show: true,
          textStyle: {
            color: "#fff",
          },
        },
      },
      yAxis: {
        type: "category",
        data: xData,
        axisLabel: {
          show: true,
          textStyle: {
            color: "#fff",
          },
        },
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "line",
          z: 0,
          lineStyle: {
            color: "#2D3443",
          },
        },
      },
      series: [
        {
          type: "bar",
          label: {
            show: true,
            position: "right",
            textStyle: {
              color: "white",
            },
          },
          // 样式设置
          itemStyle: {
            normal: {
              // 圆角+渐变色设置
              barBorderRadius: [0, 6, 6, 0],
              // 指明颜色渐变的方向
              // 指明不同百分比之下颜色的值
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                // 百分之0状态之下的颜色值
                {
                  offset: 0,
                  color: "#5052EE",
                },
                // 百分之100状态之下的颜色值
                {
                  offset: 1,
                  color: "#AB6EE5",
                },
              ]),
              showBackground: true,
            },
          },
          data: yData,
        },
      ],
    };
    options && myChart.setOption(options);
  });
  window.onresize = myChart.resize;
});
</script>
