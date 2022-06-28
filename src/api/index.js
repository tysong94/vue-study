import axios from 'axios';

function createInstance() {
	return axios.create({
		baseURL: 'https://dummyjson.com/products',
	});
}

const instance = createInstance();

export { instance };