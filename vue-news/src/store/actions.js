import { fetchNewsList, fetchAsksList, fetchJobsList  } from '../api/index.js';

export default {
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
}