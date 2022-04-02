import { shallowMount } from '@vue/test-utils';
import LoginForm from './LoginForm.vue';

describe('LoginForm.vue', () => {
	test('컴포넌트가 마운팅 되면 unsername이 존재& 초기 값으로 설정되어 있어야 함', () => {
		const wrapper = shallowMount(LoginForm, {
			data() {
				return {
					username: 'test',
				};
			},
		});
		const usernameInput = wrapper.find('#username');
		console.log(usernameInput.element._value);
	});
});

// new Vue({
// 	render: h => h(App);
// }).$mount();
