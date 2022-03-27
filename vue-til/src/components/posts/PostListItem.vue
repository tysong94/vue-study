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
export default {
	props: {
		postItem: {
			type: Object,
			required: true,
		},
	},
	methods: {
		deleteItem() {
			console.log('delete');
		},
	},
};
</script>

<style></style>
