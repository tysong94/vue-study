/* package.json, node_modules 라이브러리 밑에 잡혀있는 core library를 가져옴 */
import Vue from  'vue'
import Vuex from 'vuex'
import axios from 'axios'

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
  },
  getters: {
    getTodoItems(state) {
      return state.todoItems;
    }
  },
  mutations: {
     addTodoItem(state, newTodoItem) {
      const newTodoItemObj = {completed: false, item: newTodoItem};
      //JSON을 문자열로 변환 , // 변환하지 않을 경우 확인이 불가. object로 그냥 들어감.
      localStorage.setItem(newTodoItem, JSON.stringify(newTodoItemObj)); 
      state.todoItems.push(newTodoItemObj);
    },
    toggleTodoItem(state, payload) {
      state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed
      localStorage.removeItem(payload.todoItem.item);
      localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
    },
    removeTodoItem(state, payload) {
      localStorage.removeItem(payload.todoItem.item);
      state.todoItems.splice(payload.index, 1); // index에서 부터 하나를 지우겠다.
    },
    clearAllItems(state) {
      localStorage.clear();
      state.todoItems = [];
    },
    syncTodoItems(state, fetchedData) {
      const fetchedTodoItems = [];
      localStorage.clear();
      for(let i = 0; i < fetchedData.length; i ++) {
        let fetchedTodoItem = { 
          completed: fetchedData[i].completed, 
          item : fetchedData[i].title
        }
        fetchedTodoItems.push(fetchedTodoItem);
        localStorage.setItem(fetchedTodoItem.item, JSON.stringify(fetchedTodoItem));
      }
      state.todoItems = fetchedTodoItems;
    }
  },
  actions: {
    syncTodoItems(context) {
      // setTimeout(() => context.commit('syncTodoItems'), 2000);
      axios.get('https://jsonplaceholder.typicode.com/todos?userId=1')
        .then(response => context.commit('syncTodoItems', response.data));
    }
  }
});