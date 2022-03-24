import Vue from 'vue';
import Vuex from 'vuex';
import {
	saveAuthToCookie,
	saveUserToCookie,
	getAuthFromCookie,
	getUserFromCookie,
} from '@/utils/cookies';
import {} from '@/utils/cookies';
import { postLogin } from '@/api/index';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		username: getUserFromCookie() || '',
		token: getAuthFromCookie() || '',
	},
	getters: {
		isLogin(state) {
			return state.username !== '';
		},
	},
	mutations: {
		setUsername(state, username) {
			state.username = username;
		},
		clearUsername(state) {
			state.username = '';
		},
		setToken(state, token) {
			state.token = token;
		},
	},
	actions: {
		// context.commit (ES6 Destructuring)
		async LOGIN({ commit }, loginData) {
			const { userData } = await postLogin(loginData);
			console.log('userData', userData);
			commit('setToken', userData.token);
			commit('setUsername', userData.user.username);
			saveAuthToCookie(userData.token);
			saveUserToCookie(userData.user.username);
			return userData;
		},
	},
});
