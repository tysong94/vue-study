import axios from 'axios';
import { setInterceptor } from '@/api/interceptors';

function createInstance() {
	return axios.create({
		baseURL: process.env.VUE_APP_API_URL,
	});
}
function createInstanceWithAuth(url) {
	const instance = axios.create({
		baseURL: `${process.env.VUE_APP_API_URL}${url}`,
	});
	return setInterceptor(instance);
}

const instance = createInstance();
const postsInstance = createInstanceWithAuth('/posts');

export { instance, postsInstance };
