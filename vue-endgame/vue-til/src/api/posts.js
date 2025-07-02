import { postsInstance } from './index';

// 학습노트(/posts)
function getAllPosts() {
	return postsInstance.get('/');
}
function postOnePost(postData) {
	return postsInstance.post('/', postData);
}
function getOnePost(postId) {
	return postsInstance.get(`/${postId}`);
}
function putOnePost(postId, postData) {
	return postsInstance.put(`/${postId}`, postData);
}
function deleteOnePost(postId) {
	return postsInstance.delete(`/${postId}`);
}
export { getAllPosts, postOnePost, getOnePost, putOnePost, deleteOnePost };
