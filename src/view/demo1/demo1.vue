<template>
  <div class="container">
    <h1>
      demo1
    </h1>
    <div id="charts_1" class="container_chart">

    </div>
  </div>
</template>

<script>
import {onBeforeUnmount, onMounted } from 'vue'
import * as echarts from 'echarts';

export default {
  name: 'Demo1',
  props: {
  },
  data() {
    return {
    }
  },
  methods: {
  },
  setup() {
    let myChart ;
    const init_chart = () => {
      // 基于准备好的dom，初始化echarts实例
      myChart = echarts.init(document.getElementById('charts_1'));
      // 绘制图表
      myChart.setOption({
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫1', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      });
    }
    onBeforeUnmount(() => {
      console.log("1 run:onBeforeUnmount");
      myChart.dispose();
    })
    onMounted(() => {
      console.log("1 run:onMounted");
      init_chart();
    })
    // onActivated(()=>{
    //   console.log("run:onActivated");
    // })
    return {}
  },
}

</script>

<style>
.container {
  width: 100%;
  height: 100%;
}

.container_chart {
  width: 90vw;
  height: 60vh;
}
</style>
