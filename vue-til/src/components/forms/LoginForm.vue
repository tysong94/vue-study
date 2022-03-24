<template>
	<div class="contents">
		<div class="form-wrapper form-wrapper-sm">
			<form v-on:submit.prevent="submitForm" class="form">
				<div>
					<label for="username">id: </label>
					<input id="username" type="text" v-model="username" />
					<p class="validation-text">
						<span class="warning" v-if="!isUsernameValid && username">
							Please enter an email address
						</span>
					</p>
				</div>
				<div>
					<label for="password">pw : </label>
					<input id="password" type="text" v-model="password" />
				</div>
				<button
					v-bind:disabled="!isUsernameValid || !password"
					type="submit"
					class="btn"
				>
					로그인
				</button>
				<p class="log">{{ logMessage }}</p>
			</form>
		</div>
	</div>
</template>

<script>
import { postLogin } from '@/api/index';
import { validateEmail } from '@/utils/validation';
import { saveAuthToCookie, saveUserToCookie } from '@/utils/cookies';

export default {
	data() {
		return {
			username: '',
			password: '',
			logMessage: '',
		};
	},
	computed: {
		isUsernameValid() {
			return validateEmail(this.username);
		},
	},
	methods: {
		async submitForm() {
			try {
				console.log('post login');
				const loginData = {
					username: this.username,
					password: this.password,
				};
				const { data } = await postLogin(loginData);
				console.log(data);
				this.$store.commit('setToken', data.token);
				this.$store.commit('setUsername', data.user.username);
				saveAuthToCookie(data.token);
				saveUserToCookie(data.user.username);
				this.$router.push('/main');
				// this.logMessage = `${data.user.username}님 환영합니다.`;
			} catch (error) {
				console.log(error);
			} finally {
				this.initForm();
			}
		},
		initForm() {
			this.username = '';
			this.password = '';
		},
	},
};
</script>

<style>
.btn {
	color: white;
}
</style>
