<template>
  <div>
    <div v-for="item in news">{{ item.title }}</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      news: []
    }
  },
  created() {
    var vm = this; //axios 내에서 this는 위의 코드를 보고 있지 않음.
    axios.get('https://api.hnpwa.com/v0/news/1.json')
      .then(response => {
        console.log(response);
        vm.news = response.data;
      })
      .catch(error => console.log(error));
  }
}
</script>

<style>

</style>