import { 
  fetchNewsList, 
  fetchAsksList, 
  fetchJobsList,
  fetchUser,
  fetchItem } from '../api/index.js';

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
  FETCH_USER({commit}, username) {
    fetchUser(username)
      .then(({ data }) => {
        commit('SET_USER', data);
      })
      .catch(error => console.log(error));
  },
  FETCH_ITEM({commit}, id) {
    fetchItem(id)
      .then(({data}) => commit('SET_ITEM', data))
      .catch(error => console.log(error));
  }
}