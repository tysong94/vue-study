<template>
	<div class="contents">
		<h1 class="page-header">Edit Post</h1>
		<div class="form-wrapper">
			<form class="form" v-on:submit.prevent="submitForm">
				<div>
					<label for="title">Title:</label>
					<input id="title" type="text" v-model="title" />
				</div>
				<div>
					<label for="contents">Contents:</label>
					<textarea id="contents" type="text" rows="5" v-model="contents" />
					<p v-if="!isContentsValid" class="validation-text warning">
						Contents length must be less than 200
					</p>
				</div>
				<button type="submit" class="btn">Edit</button>
				<p class="log">{{ logMessage }}</p>
			</form>
		</div>
	</div>
</template>

<script>
import { getOnePost, putOnePost } from '@/api/posts';

export default {
	data() {
		return {
			title: '',
			contents: '',
			logMessage: '',
		};
	},
	computed: {
		isContentsValid() {
			return this.contents.length <= 200;
		},
	},
	methods: {
		async submitForm() {
			try {
				const { data } = await putOnePost(this.$route.params.id, {
					title: this.title,
					contents: this.contents,
				});
				console.log(data);
				this.$router.push('/main');
			} catch (error) {
				console.log(error.response);
				this.logMessage = error;
			}
		},
	},
	async created() {
		// console.log(this.$route.params.id);
		const { data } = await getOnePost(this.$route.params.id);
		// console.log(data);
		this.title = data.title;
		this.contents = data.contents;
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
