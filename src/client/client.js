import Vue from 'vue';
import VueRouter from 'vue-router';

import { store } from './store';

import router from './router';
import marquee from './components/marquee.vue'; // marques animated by greensock
import flag from './components/flag.vue'; // template wrapper for three.js flag renderer
import auth from './components/auth.vue'; // auth page
// eslint-disable-next-line import/no-unresolved
import projects from './components/projects';

Vue.use(VueRouter);
// eslint-disable-next-line no-unused-vars
const app = new Vue({
  store,
  router,
  el: '#app',
  components: {
    marquee,
    flag,
    auth,
    projects,
  },
});

module.hot.accept();
