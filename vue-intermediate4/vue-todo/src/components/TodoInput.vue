<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodoItem">
    <span class="addContainer" v-on:click="addTodoItem">
      <i class="fas fa-plus addBtn"></i>
    </span>
  </div>
</template>

<script>
// v-model = 2-way binding.(template <-> script)
export default {
  data: function() {
    return {
      newTodoItem: ""
    }
  },
  methods: {
    addTodoItem: function() {
      if(this.newTodoItem !== '') {
        // this.$emit('이벤트명', 인자1, 인자2, ...);
        this.$emit('addTodoItem', this.newTodoItem);
        this.clearInput();
      }
    },
    clearInput: function() {
      this.newTodoItem = '';
    }
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
} 
.addBtn {
  color: white;
  vertical-align: middle;
}
</style>