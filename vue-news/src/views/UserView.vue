<template>
  <div>
    <user-profile></user-profile>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';

export default {
  components: {
    UserProfile,
  },
  created() {
    const userName = this.$route.params.user;
    this.$store.dispatch('FETCH_USER', userName);
  }
}
</script>

<style>

</style>