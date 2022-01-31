<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" v-on:click="clearAllItems">ClearAll</span>
    <span class="syncBtn" v-on:click="syncTodoItems">Sync</span>
  </div>
</template>

<script>
export default {
  methods: {
    clearAllItems() {
      // this.$emit('clearAllItems');
      this.$store.commit('clearAllItems');
    },
    syncTodoItems() {
      this.$store.dispatch('syncTodoItems');
    }
  }
}
</script>

<style scoped>
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
}
.clearAllBtn {
  color: #e20303;
  display: block;
}
.syncBtn {
  color: #e20303;
  background-color: white;
  display: block;
}
</style>