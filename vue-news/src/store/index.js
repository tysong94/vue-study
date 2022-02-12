import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex); //플러그인 방식
Vue.config.devtools = true;

export const store = new Vuex.Store({
  state: {
    list: [],
    user: {},
    item: {},
  },
  getters: {
    fetchedList(state) {
      return state.list;
    },
    fetchedUser(state) {
      return state.user;
    },
    fetchedItem(state) {
      return state.item;
    }
  },
  mutations,
  actions,
});