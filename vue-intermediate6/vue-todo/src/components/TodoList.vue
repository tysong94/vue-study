<template>
  <div>
    <transition-group name="list" tag="ul">
      <li v-for="(todoItem, index) in getTodoItems" v-bind:key="todoItem.item" class="shadow">
        <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}"
          v-on:click="toggleTodoItem(todoItem, index)"></i>
        <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
        <span class="removeBtn" v-on:click="removeTodoItem(todoItem, index)">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  methods: {
    toggleTodoItem(todoItem, index) {
      this.$store.commit('toggleTodoItem', {todoItem, index});
    },
    removeTodoItem(todoItem, index) {
      this.$store.commit('removeTodoItem', {todoItem, index});
    }
  },
  computed: {
    // todoItems() {
    //   return this.$store.getters.getTodoItems;
    // }
    ...mapGetters(['getTodoItems'])
  }
}
</script>

<style scoped>
ul {
  list-style-type: none; /* 앞에 o 표시 없애는 것 */
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0; /* 위아레 마진, 왼쪽 오른쪽 마진 */
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
/* 리스트 아이템 트랜지션 효과 */
.list-enter-active, .list-leave-active {
  transition: all 0.5s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px); /* 밑으로 살짝 빠지는 효과 */
}
</style>