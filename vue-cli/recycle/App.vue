<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!-- 컴포넌트 명명법 종류 -->
    <!-- 
    <hello-world></hello-world> : ?? , 파일 바로가기 기능?
    <HelloWorld></HelloWorld> : PascalCase
    <HelloWorld/> : PascalCase 축약형 
    -->
  </div>
</template>

<script>
import HelloWorld from './HelloWorld.vue'

export default {
  // 인스턴스 옵셕 속성 or 컴포넌트 옵션 속성
  name: 'App',
  components: {
    HelloWorld // = 'hello-world': HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
