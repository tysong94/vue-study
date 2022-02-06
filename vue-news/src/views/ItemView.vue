<template>
  <div>
    <p>title : {{ this.$store.state.item.title }}</p>
    <p>content : {{ this.$store.state.item.content }}</p>
    <p>user : {{ this.$store.state.item.user }}</p>
  </div>
</template>

<script>
export default {
  created() {
    const id = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', id);
  }
}
</script>

<style>

</style>