import { 
  fetchList,
  fetchUser,
  fetchItem
} from '../api/index.js';

export default {
  FETCH_LIST({ commit }, pageName) {
    return fetchList(pageName) 
      .then(response => {
        commit('SET_LIST', response.data);
        return response.data; 
        // 여기서 리턴한 값이 위에서 리턴될 Promise 객체의 response 값이 된다. 
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
  },
}