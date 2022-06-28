import { instance } from './index';

function getData() {
	return instance.get('/');
}

export { getData };