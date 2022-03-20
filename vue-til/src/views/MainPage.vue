<template>
	<div class="main list-container contents">
		<h1 class="page-header">Today I Learned</h1>
		<ul>
			<PostListItem
				v-for="postItem in postItems"
				v-bind:key="postItem._id"
				v-bind:postItem="postItem"
			>
			</PostListItem>
		</ul>
	</div>
</template>

<script>
import { fetchPosts } from '@/api/index';
import PostListItem from '@/components/posts/PostListItem.vue';

export default {
	components: {
		PostListItem,
	},
	data() {
		return {
			postItems: [],
		};
	},
	methods: {
		async fetchNotes() {
			const { data } = await fetchPosts();
			console.log(data.posts);
			this.postItems = data.posts;
		},
	},
	created() {
		this.fetchNotes();
	},
};
</script>

<style></style>
