<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <!-- v-bind:하위컴포넌트 이벤트명=현재 컴포넌트 메서드명 -->
    <TodoInput v-on:addTodoItem="addTodoItem"></TodoInput>
    <!-- v-bind:하위컴포넌트 props 속성 이름=현재 컴포넌트 data 속성 이름 -->
    <TodoList v-bind:propsdata="todoItems"></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  data: function() {
    return {
      todoItems: []
    }
  },
  methods: {
    addTodoItem: function(newTodoItem) {
      var newTodoItemObj = {completed: false, item: newTodoItem};
      //JSON을 문자열로 변환 , // 변환하지 않을 경우 확인이 불가. object로 그냥 들어감.
      localStorage.setItem(newTodoItem, JSON.stringify(newTodoItemObj)); 
      this.todoItems.push(newTodoItemObj);
    }
  },
  created: function() {
    if(localStorage.length > 0) {
      for(var i = 0; i < localStorage.length; i++) {
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          var todoItemObj = JSON.parse(localStorage.getItem(localStorage.key(i)));
          this.todoItems.push(todoItemObj);
        }
      }
    }
  },
  components: {
    // 컴포넌트 태그명 : 컴포넌트 변수(컴포넌트 내용)
    'TodoHeader': TodoHeader,
    'TodoInput': TodoInput,
    'TodoList': TodoList,
    'TodoFooter': TodoFooter
  }
}
</script>

<style>
body {
  text-align: center;
  background-color: #F6F6F6;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
