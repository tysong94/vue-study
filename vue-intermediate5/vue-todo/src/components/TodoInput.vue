<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodoItem">
    <span class="addContainer" v-on:click="addTodoItem">
      <i class="fas fa-plus addBtn"></i>
    </span>

    <Modal v-if="showModal" @close="showModal = false">
      <!--
      you can use custom content here to overwrite
      default content
      -->
      <h3 slot="header">
        경고!
        <i class="closeModalBtn fas fa-times" @click="showModal = false"></i>
      </h3>
      <div slot="body">내용을 입력하세요.</div>
    </Modal>
  </div>
</template>

<script>
import Modal from './common/Modal.vue'

// v-model = 2-way binding.(template <-> script)
export default {
  components: {
    // Modal: Modal
    Modal
  },
  data() {
    return {
      newTodoItem: "",
      showModal: false
    }
  },
  methods: {
    addTodoItem() {
      if(this.newTodoItem !== '') {
        // this.$emit('이벤트명', 인자1, 인자2, ...);
        this.$emit('addTodoItem', this.newTodoItem);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
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
.closeModalBtn {
  color: #42b983;
}
</style>