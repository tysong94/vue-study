import { 
  fetchNewsList, 
  fetchAsksList, 
  fetchJobsList,
  fetchUserInfo, } from '../api/index.js';

export default {
  FETCH_NEWS({ commit }) { //Destructuring
    fetchNewsList()
    .then(({ data }) => {
      commit('SET_NEWS', data);
    })
    .catch(error => console.log(error));
  }, 
  FETCH_ASK({ commit }) {
    fetchAsksList()
      .then(({ data }) => {
        commit('SET_ASK', data);
      })
      .catch(error => console.log(error));
  },
  FETCH_JOBS(context) {
    fetchJobsList()
      .then(response => {
        context.commit('SET_JOBS', response.data);
      })
      .catch(error => console.log(error));
  },
  FETCH_USERINFO({commit}, username) {
    fetchUserInfo(username)
      .then(({ data }) => {
        commit('SET_USERINFO', data);
      })
      .catch(error => console.log(error));
  }
}