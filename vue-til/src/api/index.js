import axios from 'axios';
import { setInterceptor } from '@/api/interceptors';

function createInstance() {
	const instance = axios.create({
		baseURL: process.env.VUE_APP_API_URL,
	});
	return setInterceptor(instance);
}

// 2. API 함수들 정리
function postSignup(signupData) {
	return createInstance().post('/signup', signupData);
}
function postLogin(loginData) {
	console.log(createInstance);
	return createInstance().post('/login', loginData);
}
function fetchPosts() {
	return createInstance().get('/posts');
}

export { postSignup, postLogin, fetchPosts };
