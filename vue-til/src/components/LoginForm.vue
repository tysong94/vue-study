<template>
	<form v-on:submit.prevent="submitForm">
		<div>
			<label for="username">id: </label>
			<input id="username" type="text" v-model="username" />
		</div>
		<div>
			<label for="password">pw : </label>
			<input id="password" type="text" v-model="password" />
		</div>
		<button type="submit">로그인</button>
		<p>{{ logMessage }}</p>
	</form>
</template>

<script>
import { postLogin } from '@/api/index';

export default {
	data() {
		return {
			username: '',
			password: '',
			logMessage: '',
		};
	},
	methods: {
		initForm() {
			this.username = '';
			this.password = '';
		},
		async submitForm() {
			console.log('post login');
			const loginData = {
				username: this.username,
				password: this.password,
			};
			const { data } = await postLogin(loginData);
			console.log(data);
			this.logMessage = `${data.user.username}님 환영합니다.`;
			this.initForm();
		},
	},
};
</script>

<style></style>
