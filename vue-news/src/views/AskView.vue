<template>
  <div>
    <div v-for="item in asks">
      {{ item.title }}
    </div>
  </div>
</template>

<script>
import { fetchAsksList } from '../api/index.js';

export default {
  data() {
    return {
      asks: []
    }
  },
  created() {
    var vm = this;
    fetchAsksList()
      .then(response => vm.asks = response.data)
      .catch(error => console.log(error));
  }
}
</script>

<style>

</style>