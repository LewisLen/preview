<template>
  <div class="sales-box">
    <h2>月销图</h2>
    <div class="chart" id="twoChart"></div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import * as echarts from "echarts";
import useGetData from "@/hooks/useGetData";

// 半透明的颜色值
const colorArr1 = [
  //   "rgba(11, 168, 44, 0.85)",
  //   "rgba(44, 110, 255, 0.85)",
  //   "rgba(22, 242, 217, 0.85)",
  //   "rgba(254, 33, 30, 0.85)",
  //   "rgba(250, 105, 0, 0.85)",
  "rgb(128, 255, 165)",
  "rgb(0, 221, 255)",
  "rgb(55, 162, 255)",
  "rgb(255, 0, 135)",
  "rgb(255, 191, 0)",
];
// 全透明的颜色值
const colorArr2 = [
  // "rgba(11, 168, 44, 0)",
  // "rgba(44, 110, 255, 0)",
  // "rgba(22, 242, 217, 0)",
  // "rgba(254, 33, 30, 0)",
  // "rgba(250, 105, 0, 0)",
  "rgb(1, 191, 236)",
  "rgb(77, 119, 255)",
  "rgb(116, 21, 219)",
  "rgb(135, 0, 157)",
  "rgb(224, 62, 76)",
];

onMounted(() => {
  useGetData("chartData2").then((twoData) => {
    // 初始化echarts
    let chartDom = document.getElementById("twoChart");
    let myChart = echarts.init(chartDom);

    const seriesArr = twoData.data.data[0].series.map((item, index) => {
      return {
        smooth: true, // 平滑过渡
        showSymbol: false, // 隐藏点
        stack: "Total", // 开启堆叠
        lineStyle: {
          width: 0,
        },
        // 选中的高亮
        emphasis: {
          focus: "series",
        },
        name: item.types,
        type: "line",
        data: item.num,
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: colorArr1[index],
            }, // %0的颜色值
            {
              offset: 1,
              color: colorArr2[index],
            }, // 100%的颜色值
          ]),
        },
      };
    });
    myChart.setOption({
      color: ["#80FFA5", "#00DDFF", "#37A2FF", "#FF0087", "#FFBF00"],
      tooltip: {
        trigger: "axios",
        // 十字指向器
        axisPointer: {
          type: "cross",
          label: {
            backgroundColor: "#e6b600",
          },
        },
      },
      grid: {
        left: "1%",
        right: "5%",
        bottom: "3%",
        containLabel: true,
      },
      legend: {
        data: ["服饰", "数码产品", "家电", "家居", "日化"],
        icon: "circle",
        textStyle: {
          color: "#fff",
        },
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: twoData.data.data[0].day,
        axisLabel: {
          show: true,
          textStyle: {
            color: "#fff",
          },
        },
      },
      yAxis: {
        type: "value",
        axisLabel: {
          show: true,
          textStyle: {
            color: "#fff",
          },
        },
      },
      series: seriesArr,
    });
    // echarts自适应
    window.onresize = myChart.resize;
  });
});
</script>
