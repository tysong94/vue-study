<template>
  <div>
    <user-profile>
      <div slot="username">{{ fetchedUser.id }}</div>
      <span slot="time">{{ 'Joined ' + fetchedUser.created }}, </span>
      <span slot="karma">{{ fetchedUser.karma }}</span>
    </user-profile>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    UserProfile,
  },
  computed: {
    ...mapGetters(['fetchedUser']),
  },
  created() {
    const userName = this.$route.params.user;
    this.$store.dispatch('FETCH_USER', userName);
  }
}
</script>

<style>
</style>