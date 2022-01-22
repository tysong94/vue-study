import Vue from 'vue'
import App from './App.vue'
// 위의 App은 싱글 파일 컴포넌트

Vue.config.productionTip = false

/* App이라는 싱글 파일 컴포넌트를 렌더링 하여 붙여넣었음.
 */
new Vue({
  render: h => h(App),
}).$mount('#app')


/* 위의 부분은 아래와 동일하다.
var App = {
  template: '<div>app</div>'
}

new Vue({
  el: '#app',
  components: {
    'app': App
  }
}) 

*/