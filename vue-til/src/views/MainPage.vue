<template>
	<div class="main list-container contents">
		<h1 class="page-header">Today I Learned</h1>
		<LoadingSpinner v-if="isLoading"></LoadingSpinner>
		<ul v-else>
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
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import PostListItem from '@/components/posts/PostListItem.vue';

export default {
	components: {
		LoadingSpinner,
		PostListItem,
	},
	data() {
		return {
			postItems: [],
			isLoading: false,
		};
	},
	methods: {
		async fetchNotes() {
			this.isLoading = true;
			const { data } = await fetchPosts();
			this.isLoading = false;
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
