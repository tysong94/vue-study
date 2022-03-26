<template>
	<div class="contents">
		<h1 class="page-header">Create Post</h1>
		<div class="form-wrapper">
			<form class="form" v-on:submit.prevent="submitForm">
				<div>
					<label for="title">Title:</label>
					<input id="title" type="text" v-model="title" />
				</div>
				<div>
					<label for="contents">Contents:</label>
					<textarea id="contents" type="text" rows="5" v-model="contents" />
				</div>
				<button type="submit" class="btn">Create</button>
				<p class="log">{{ logMessage }}</p>
			</form>
		</div>
	</div>
</template>

<script>
import { postOnePost } from '@/api/index';
export default {
	data() {
		return {
			title: '',
			contents: '',
			logMessage: '',
		};
	},
	methods: {
		async submitForm() {
			try {
				const { data } = await postOnePost({
					title: this.title,
					contents: this.contents,
				});
				console.log(data);
			} catch (error) {
				// console.log(error.response.data.message);
				this.logMessage = error.response.data.message;
			}
		},
	},
};
</script>

<style scoped>
.form-wrapper .form {
	width: 100%;
}
.btn {
	color: white;
}
</style>
