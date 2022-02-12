<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
import listMixin from '../mixins/ListMixin.js';

export default {
  components: {
    ListItem,
  },
  mixins: [listMixin],
}
</script>

<style>

</style>