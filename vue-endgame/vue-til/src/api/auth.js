import { instance } from './index';

// 회원가입
function postSignup(signupData) {
	return instance.post('/signup', signupData);
}
// 로그인
function postLogin(loginData) {
	return instance.post('/login', loginData);
}

export { postSignup, postLogin };
