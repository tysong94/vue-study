import { shallowMount } from '@vue/test-utils';
import LoginForm from './LoginForm.vue';

describe('LoginForm.vue', () => {
	test('ID가 이메일 형식이 아니면 경고메시지가 출력된다.', () => {
		const wrapper = shallowMount(LoginForm, {
			data() {
				return {
					username: 'test',
				};
			},
		});
		const warningText = wrapper.find('.warning');
		expect(warningText.exists()).toBeTruthy();
	});

	test('ID와 PW가 입력되지 않으면 로그인 버튼이 비활성화 된다.', () => {
		const wrapper = shallowMount(LoginForm, {
			data() {
				return {
					username: 'a@a.com',
					password: 'a',
				};
			},
		});
		const button = wrapper.find('button');
		expect(button.element.disabled).toBeTruthy();
	});
});

// new Vue({
// 	render: h => h(App);
// }).$mount();
