import axios from 'axios';
import { setInterceptor } from '@/api/interceptors';

function createInstance() {
	const instance = axios.create({
		baseURL: process.env.VUE_APP_API_URL,
	});
	return setInterceptor(instance);
}
const instance = createInstance();

// 2. API 함수들 정리
function postSignup(signupData) {
	return instance.post('/signup', signupData);
}
function postLogin(loginData) {
	return instance.post('/login', loginData);
}
function getAllPosts() {
	return instance.get('/posts');
}
function postOnePost(postData) {
	return instance.post('/posts', postData);
}

export { postSignup, postLogin, getAllPosts, postOnePost };
