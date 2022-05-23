<template>
  <div class="container_chart4">
      <div id="map" class="chart_class_map"></div>
  </div>
</template>

<script>
import { onMounted, ref,onBeforeUnmount } from 'vue'
import * as echarts from 'echarts';

export default {
  name: 'Demo1',
  components: {
  },
  props: {
  },
  setup() {
    let myChart;
    const map_init=(id_name)=>{
      let dom = document.getElementById('map')
      let areaData = window.worldJson;
      let realData = window.realData;
      //map
      // 渲染echarts地图
      echarts.registerMap('world', areaData)
      myChart = echarts.init(dom)
      //set
      myChart.setOption({
                visualMap: {
                    min: 0,
                    max: 1000,
                    left: 26,
                    bottom: 40,
                    showLabel: !0,
                    text: ["高", "低"],
                    pieces: [{
                        gt: 100,
                        label: "> 100",
                        color: "#7f1100"
                    }, {
                        gte: 50,
                        lte: 100,
                        label: "50 - 100",
                        color: "#ff5428"
                    }, {
                        gte: 20,
                        lt: 50,
                        label: "20 - 50",
                        color: "#ff8c71"
                    }, {
                        gt: 0,
                        lt: 20,
                        label: "<20",
                        color: "#ffd768"
                    }, {
                        value: 0,
                        color: "#b7d6f3"
                    }],
                    show: !0
                },
                series: [{
                    name: 'world世界地图',
                    type: 'map',
                    mapType: 'world',
                    label: {
                        normal: {
                            show: true,
                            fontSize: "12",
                            color: "#fff"
                        }
                    },
                    zoom: 5, // 1,5
                    center: [110.97, 35.71], // 110.97, 35.71
                    roam: true,
                    itemStyle: {
                        emphasis: {
                            areaColor: '#2cd90f',//'#ff6700',
                        }
                    },
                    data: realData
                }]
            })
    }

    //console.log("context:",context)
    const data_option = ref({});
    const client_event = (v) => {
      if (v) {
        //data_option.value = db_line01
      } else {
        //data_option.value = db_line2
      }
    }
    onMounted(() => {
      console.log("F run:onMounted map:");
      //data_option.value = db_line1;
      map_init("map")
    })
    onBeforeUnmount(() => {
      //console.log("L run:onBeforeUnmount");
      myChart.dispose();
    })
    return { client_event, data_option }
  },
}

</script>

<style>
.container_chart4 .chart_class_map {
  width: 99vw;
  height: 90vh;
  padding: 0;
  margin:0;
}
</style>
