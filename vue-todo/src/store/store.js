/* package.json, node_modules 라이브러리 밑에 잡혀있는 core library를 가져옴 */
import Vue from  'vue'
import Vuex from 'vuex'

Vue.use(Vuex); // 전역으로 플러그인을 사용

const storage = {
  fetch() {
    const arr = [];
    if(localStorage.length > 0) {
      for(let i = 0; i < localStorage.length; i++) {
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          const todoItemObj = JSON.parse(localStorage.getItem(localStorage.key(i)));
          arr.push(todoItemObj);
        }
      }
    }
    return arr;
  }
}

export const store = new Vuex.Store({
  state: {
    todoItems: storage.fetch()
  }
});