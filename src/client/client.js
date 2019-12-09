import Vue from 'vue';
import VueRouter from 'vue-router';

import { axios } from 'axios';
import VueDraggableResizable from 'vue-draggable-resizable';

import { store } from './store';
import router from './router';

import auth from './components/auth.vue'; // auth page
import root from './components/root.vue';

 
// optionally import default styles
import 'vue-draggable-resizable/dist/VueDraggableResizable.css';
 
Vue.component('vue-draggable-resizable', VueDraggableResizable);
Vue.use(VueRouter, axios);
 
// eslint-disable-next-line no-unused-vars
const app = new Vue({
  store,
  router,
  el: '#app',
  components: {
    root,
    auth,
  },
});

module.hot.accept();

export default app;
