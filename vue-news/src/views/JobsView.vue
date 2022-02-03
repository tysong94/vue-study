<template>
<div>
  <div v-for="item in jobs">
    {{ item.title }}
  </div>
</div>
</template>

<script>
import { fetchJobsList } from '../api/index.js';

export default {
  data() {
    return {
      jobs: []
    }
  },
  created() {
    var vm = this;
    fetchJobsList()
      .then(response => this.jobs = response.data) //this로 접근 가능...
      .catch(error => console.log(error));
  }
}
</script>

<style>

</style>