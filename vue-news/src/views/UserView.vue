<template>
  <div>
    <p>id : {{ this.$store.state.userinfo.id }}</p>
    <p>karma : {{ this.$store.state.userinfo.karma }}</p>
    <p>created : {{ this.$store.state.userinfo.created }}</p>
  </div>
</template>

<script>
export default {
  created() {
    const username = this.$route.params.user;
    this.$store.dispatch('FETCH_USERINFO', username);
  }
}
</script>

<style>

</style>