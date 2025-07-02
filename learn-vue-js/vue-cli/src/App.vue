<template>
  <!-- 템플릿 루트에는 하나의 element만 있어야 함. -->
  <div>
    <!-- <app-header v-bind:하위 컴포넌트의 프롭스 속성 이름="상위컴포넌트의 데이터 이름"></app-header> -->
    <!-- 방향 : 왼쪽 -->
    <!-- <app-header v-on:하위 컴포넌트의 이벤트 이름="상위컴포넌트의 메소드 이름"></app-header> -->
    <!-- 방향 : 오른쪽 -->
    <app-header 
      v-bind:propsdata="str"
      v-on:renew="renewStr"></app-header>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';

// 위의 import는 다음과 같다.
// 저장되는 형식이 객체 -> 파일로 바뀌어짐.
// var AppHeader = {
//   template: '<header><h1>Header</h1></header>'
// }


// new Vue({
//     data: {
//         str: 'hi'
//     }
// })
export default {
  components: {
    'app-header': AppHeader/* 컴포넌트 이름 : 컴포넌트 변수(파일) */
  },
  data: function () {
    return {
      str: "123",
    };
  },
  methods: {
    renewStr: function() {
      this.str = 'renewd';
    }
  }
};
</script>

<style></style>
