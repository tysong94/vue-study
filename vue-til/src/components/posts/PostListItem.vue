<template>
	<li>
		<div class="post-title">
			{{ postItem.title }}
		</div>
		<div class="post-contents">
			{{ postItem.contents }}
		</div>
		<div class="post-time">
			{{ postItem.createdAt }}
			<ion-icon name="create-outline"></ion-icon>
			<ion-icon name="trash-outline" v-on:click="deleteItem"></ion-icon>
		</div>
	</li>
</template>

<script>
import { deleteOnePost } from '@/api/posts';

export default {
	props: {
		postItem: {
			type: Object,
			required: true,
		},
	},
	methods: {
		async deleteItem() {
			if (confirm('Do you want to delete it?')) {
				console.log(this.postItem._id);
				const response = await deleteOnePost(this.postItem._id);
				console.log(response);
				this.$emit('refresh');
			}
		},
	},
};
</script>

<style></style>
