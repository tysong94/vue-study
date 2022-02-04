import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNewsList } from '../api/index.js';
import { fetchAsksList } from '../api/index.js';
import { fetchJobsList } from '../api/index.js';

Vue.use(Vuex); //플러그인 방식

export const store = new Vuex.Store({
  state: {
    news: [],
    ask: [],
    jobs: [],
  },
  mutations: {
    SET_NEWS(state, news) {
      state.news = news;
    },
    SET_ASK(state, ask) {
      state.ask = ask;
    },
    SET_JOBS(state, jobs) {
      state.jobs = jobs;
    },
  },
  actions: {
    FETCH_NEWS({ commit }) {
      fetchNewsList()
      .then(({ data }) => {
        commit('SET_NEWS', data);
      })
      .catch(error => console.log(error));
    }, 
    FETCH_ASK(context) {
      fetchAsksList()
        .then(({ data }) => {
          context.commit('SET_ASK', data);
        })
        .catch(error => console.log(error));
    },
    FETCH_JOBS(context) {
      fetchJobsList()
        .then(({ data }) => {
          context.commit('SET_JOBS', data);
        })
        .catch(error => console.log(error));
    }
  },
});