<template>
  <div class="container_chart4">
    <Chart :chart_option="data_option" chart_id="charts_id1" chart_class="chart_class1"></Chart>
    <Chart :chart_option="db_category" chart_id="charts_id2" chart_class="chart_class1"></Chart>
    <Chart :chart_option="db_line01" chart_id="charts_id3" chart_class="chart_class1"></Chart>
  </div>
  <div class="container_chart4">
    <Chart :chart_option="db_pie01" chart_id="charts_id21" chart_class="chart_class1"></Chart>
    <Chart :chart_option="db_candlestick01" chart_id="charts_id22" chart_class="chart_class1"></Chart>
    <Chart :chart_option="db_gauge01" chart_id="charts_id23" chart_class="chart_class1"></Chart>
  </div>
  <div class="container_chart4">
    <Chart :chart_option="db_funnel01" chart_id="charts_id31" chart_class="chart_class1"></Chart>
    <Chart :chart_option="db_category02" chart_id="charts_id32" chart_class="chart_class1"></Chart>
    <Chart :chart_option="db_themeRiver01" chart_id="charts_id33" chart_class="chart_class1"></Chart>
  </div>
  <div class="buttonBox">
    <button @click="client_event(true)">start</button>
    <button @click="client_event(false)">Change</button>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import Chart from '../components/Chart.vue'
import db_line01 from '../../data/charts/line01'
import db_pie01 from '../../data/charts/pie01'
import db_category from '../../data/charts/category'
import db_candlestick01 from '../../data/charts/candlestick01'
import db_gauge01 from '../../data/charts/gauge01'
import db_funnel01 from '../../data/charts/funnel01'
import db_category02 from '../../data/charts/category02'
import db_themeRiver01 from '../../data/charts/themeRiver01'

import db_line1 from '../../data/line1.ts'
import db_line2 from '../../data/line2.ts'

export default {
  name: 'Demo1',
  components: {
    Chart,
  },
  props: {
  },
  setup() {
    //console.log("context:",context)
    const data_option = ref({});
    const client_event = (v) => {
      if (v) {
        data_option.value = db_line01
      } else {
        data_option.value = db_line2
      }
    }
    onMounted(() => {
      //console.log("F run:onMounted category:",category);
      data_option.value = db_line1;
    })
    return { client_event, data_option,db_category,db_line01,
    db_pie01,db_candlestick01,db_gauge01,db_funnel01,
    db_category02,db_themeRiver01 }
  },
}

</script>

<style>
.container_chart4 .chart_class1 {
  float: left;
  width: 33vw;
  height: 30vh;
  padding: 0;
  margin: 0.14vw;
}
</style>
