import { postsInstance } from './index';

// 학습노트(/posts)
function getAllPosts() {
	return postsInstance.get('/');
}
function postOnePost(postData) {
	return postsInstance.post('/', postData);
}

export { getAllPosts, postOnePost };
