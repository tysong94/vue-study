import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex); //플러그인 방식

export const store = new Vuex.Store({
  state: {
    news: [],
  }
});