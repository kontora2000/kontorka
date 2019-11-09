import VueRouter from 'vue-router';

import Auth from '../components/auth.vue';
import Root from '../components/root.vue';

const routes = [
  { path: '/', name: 'Root', component: Root, },
  { path: '/auth', name: 'Auth', component: Auth, }

];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
