<template>
  <ChartLine :chart_option="data_option" chart_id="charts_line1"></ChartLine>

  <div class="buttonBox">
    <button @click="client_event(true)">start</button>
    <button @click="client_event(false)">Change</button>
  </div>
  <div>{{ data_option }}</div>
</template>

<script>
import { onMounted, ref } from 'vue'
import ChartLine from '../components/Line.vue'

export default {
  name: 'Demo1',
  components: {
    ChartLine,
  },
  props: {
  },
  setup() {
    //console.log("context:",context)
    let line_option3 = {
      title: {
        text: 'ECharts 入门示例3'
      },
      tooltip: {},
      xAxis: {
        data: ['衬衫C', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [35, 20, 36, 10, 10, 20]
        }
      ]
    };
    let line_option2 = {
      title: {
        text: 'ECharts 入门示例2'
      },
      tooltip: {},
      xAxis: {
        data: ['衬衫B', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [25, 20, 36, 10, 10, 20]
        }
      ]
    };
    let line_option1 = {
      title: {
        text: 'ECharts 入门示例1'
      },
      tooltip: {},
      xAxis: {
        data: ['衬衫A', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [15, 20, 36, 10, 10, 20]
        }
      ]
    };
    const data_option = ref({});
    const client_event = (v) => {
      if (v) {
        data_option.value = line_option2
      } else {
        data_option.value = line_option3
      }
    }
    onMounted(() => {
      //console.log("F run:onMounted");
      data_option.value = line_option1;
    })
    return { client_event, data_option }
  },
}

</script>

<style>
.buttonBox {
  float: left;
  clear: both;
  margin-bottom: 10px;
}

.buttonBox button {
  float: left;
  line-height: 150%;
  font-size: 14px;
  margin: 4px 6px;
}
</style>
