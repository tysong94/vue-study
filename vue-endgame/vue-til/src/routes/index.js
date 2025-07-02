import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store/index';

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			redirect: '/login',
		},
		{
			path: '/login',
			component: () => import('@/views/LoginPage.vue'),
		},
		{
			path: '/signup',
			component: () => import('@/views/SignupPage.vue'),
		},
		{
			path: '/main',
			component: () => import('@/views/PostListPage.vue'),
			meta: { loginRequired: true },
		},
		{
			path: '/add',
			component: () => import('@/views/PostAddPage.vue'),
			meta: { loginRequired: true },
		},
		{
			path: '/post/:id',
			component: () => import('@/views/PostEditPage.vue'),
			meta: { loginRequired: true },
		},
		{
			path: '*',
			component: () => import('@/views/NotFoundPage.vue'),
		},
	],
});

// to : 이동할 페이지, from : 현재 페이지, next : 이동을 실행하는 함수
router.beforeEach((to, from, next) => {
	// 로그인 필요 속성이 true인 페이지에서 로그인이 안되어 있을 경우
	if (to.meta.loginRequired && !store.getters.isLogin) {
		console.log('인증이 필요합니다.');
		next('/login');
		return; //return을 안하면 아래의 next를 불필요하게 한번 더 실행
	}
	next();
});

export default router;
