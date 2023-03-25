<template>
  <div>
    <h2>库存统计</h2>
    <div class="chart" id="threeChart"></div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import * as echarts from "echarts";
import useGetData from "@/hooks/useGetData";
onMounted(() => {
  useGetData("chartData3").then((threeData) => {
    console.log("饼状图", threeData);
    let myChart = echarts.init(document.getElementById("threeChart"));
    let options = {
      tooltip: {
        trigger: "item",
        show: true,
      },
      // 设置图例
      legend: {
        top: 0,
        textStyle: {
          color: "#fff",
        },
      },
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: "50%",
          data: threeData.data.data,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    };
    myChart.setOption(options);
    // echarts自适应
    window.onresize = myChart.resize;
  });
});
</script>
