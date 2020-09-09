import { defineComponent, onMounted, ref } from 'vue';
import echarts from 'echarts';


const echartOption = {
  title: {
    text: 'ECharts 入门示例'
  },
  tooltip: {},
  legend: {
    data: ['销量']
  },
  xAxis: {
    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
  },
  yAxis: {},
  series: [{
    name: '销量',
    type: 'bar',
    data: [5, 20, 36, 10, 10, 20]
  }]
};


export default defineComponent({
  name: 'Chart',
  setup() {

    const chartRef = ref(null);
    let chart;

    onMounted(() => {
      console.log(chartRef);
      chart = echarts.init(chartRef.value);
      chart.setOption(echartOption);
    })

    return () => (
      <div class="chart" ref={chartRef} style={{ width: '600px', height: '400px' }}></div>
    )
  }
})