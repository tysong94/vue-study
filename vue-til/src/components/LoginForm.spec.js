import { shallowMount } from '@vue/test-utils';
import LoginForm from './LoginForm.vue';

describe('LoginForm.vue', () => {
	test('ID가 이메일 형식이 아니면 경고메시지가 출력된다.', () => {
		const wrapper = shallowMount(LoginForm, {
			data() {
				return {
					username: 'test@abc.com',
				};
			},
		});
		const warningText = wrapper.find('.warning');
		expect(warningText.exists()).toBeTruthy();
	});
});

// new Vue({
// 	render: h => h(App);
// }).$mount();
