<template>
  <div class="container_chart3">
    <Chart :chart_option="data_option" chart_id="charts_id1" chart_class="chart_class1"></Chart>
    <Chart :chart_option="data_option" chart_id="charts_id2" chart_class="chart_class1"></Chart>
    <Chart :chart_option="data_option" chart_id="charts_id3" chart_class="chart_class1"></Chart>
  </div>

  <div class="buttonBox">
    <button @click="client_event(true)">start</button>
    <button @click="client_event(false)">Change</button>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import Chart from '../components/Chart.vue'
import category from '../../data/charts/category.ts'
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
        data_option.value = category
      } else {
        data_option.value = db_line2
      }
    }
    onMounted(() => {
      //console.log("F run:onMounted category:",category);
      data_option.value = db_line1;
    })
    return { client_event, data_option }
  },
}

</script>

<style>
.container_chart3 .chart_class1 {
  float: left;
  width: 33.3vw;
  height: 40vh;
  padding: 0;
  margin: 0;
}
</style>
