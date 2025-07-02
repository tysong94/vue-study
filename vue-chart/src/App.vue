<template>
  <BarChart 
    :chartData="barChartData"  
  />
  <LineChart
    :chartData="lineChartData"
  />
</template>

<script>
import { getData } from './api/get.js'
import BarChart from './components/BarChart.vue'
import LineChart from './components/LineChart.vue'

export default {
  name: 'App',
  components: {
    BarChart,
    LineChart,
  },
  data() {
    return {
      barChartData: {
        labels: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
        datasets: [
          {
            label: 'counts',
            backgroundColor: '#f87979',
            data: []
          }
        ]
      },
      lineChartData: {
        labels: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
        datasets: [
          {
            label: 'counts',
            backgroundColor: '#f87979',
            data: []
          }
        ]
      },      
    }
  },
  methods: {
    async fetchBarChartData() {
      const { data } = await getData();
      let counts = data.products.map(({ stock }) => stock);
      counts.sort(() => Math.random() - 0.5);
      this.barChartData.datasets[0].data = counts;
      console.log('fetching bar data', this.barChartData);
    },
    async fetchLineChartData() {
      const { data } = await getData();
      let counts = data.products.map(({ stock }) => stock);
      counts.sort(() => Math.random() - 0.5);
      this.lineChartData.datasets[0].data = counts;
      console.log('fetching line data', this.lineChartData);
    },
    fetchIntervally3sec() {
      setInterval(this.fetchBarChartData, 5000);
    },
    fetchIntervally5sec() {
      setInterval(this.fetchLineChartData, 10000);
    },
  },
  mounted() {
    this.fetchIntervally3sec();
    this.fetchIntervally5sec();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
