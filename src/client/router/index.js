import VueRouter from 'vue-router';

import Auth from '../components/auth.vue';

const routes = [
  { path: '/auth', component: Auth, }
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
