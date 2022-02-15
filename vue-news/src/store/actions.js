import { 
  fetchList,
  fetchUser,
  fetchItem
} from '../api/index.js';

export default {
  async FETCH_LIST({ commit }, pageName) {
    try {
      const response = await fetchList(pageName);
      commit('SET_LIST', response.data);
      return response; // return을 해주어야 이 함수의 promise를 사용할 수 있음.
      // FETCH_LIST(pageName).then().catch();
    } catch (error) {
      console.log(error);      
    }
  },  
  async FETCH_USER({commit}, username) {
    try {    
      const response = await fetchUser(username);
      commit('SET_USER', response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async FETCH_ITEM({commit}, id) {
    try {
      const response = await fetchItem(id);
      commit('SET_ITEM', response.data);
      return response; 
    } catch (error) {
      console.log(error);      
    }
  }
}