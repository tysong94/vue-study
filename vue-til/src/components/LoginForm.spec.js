import { shallowMount } from '@vue/test-utils';
import LoginForm from './LoginForm.vue';

describe('LoginForm.vue', () => {
	test('컴포넌트가 마운팅 되면 unsername이 존재& 초기 값으로 설정되어 있어야 함', () => {
		const wrapper = shallowMount(LoginForm);
		// wrapper.vm = instance
		expect(wrapper.vm.username).toBe('');
	});
});

// new Vue({
// 	render: h => h(App);
// }).$mount();
