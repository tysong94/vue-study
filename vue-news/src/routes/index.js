import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import AsyncAwait from '../views/AsyncAwait.vue';
// import createListView from '../hoc/CreateListView.js';
import bus from '../utils/bus.js';
import { store } from '../store/index.js' // this.$store는 인스턴스(컴포넌트)에서만 접근 가능.

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/news'
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView,
      // component: createListView('NewsView'),
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store.dispatch('FETCH_LIST', to.name)
          .then((data) => {
            console.log('fetched', data);
            next();
          })
          .catch((error) => {
            console.log(error);
          });      
      },
    },
    {
      path: '/ask',
      name: 'ask',
      component: AskView,
      // component: createListView('AskView'),
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store.dispatch('FETCH_LIST', to.name)
          .then((data) => {
            console.log('fetched', data);
            next();
          })
          .catch((error) => {
            console.log(error);
          });      
      },
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView,
      // component: createListView('JobsView'),
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store.dispatch('FETCH_LIST', to.name)
          .then((data) => {
            console.log('fetched', data);
            next();
          })
          .catch((error) => {
            console.log(error);
          });      
      },      
    },
    {
      path: '/user/:user',
      component: UserView
    },
    {
      path: '/item/:id',
      component: ItemView
    },
    {
      path: '/async',
      component: AsyncAwait
    },    
  ]
});
