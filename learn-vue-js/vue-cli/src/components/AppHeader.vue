<template>
  <header>
    <h1>{{propsdata}}</h1>
    <button v-on:click="sendEvent">send</button>
  </header>
</template>

<script>
export default {
  props: ['propsdata'],
  methods: {
    sendEvent: function() { 
      this.$emit('renew'); //상위 컴포넌트 태그로 이벤트를 방출(emit)함.
    }
  }
}
</script>

<style>

</style>