
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

import marquee from './components/marquee.vue'; //marques animated by greensock
import flag from './components/flag.vue';  //template wrapper for three.js flag renderer
import auth from './components/auth.vue'; //auth page
import projects from './components/projects';
 
Vue.use(VueAxios, axios)

new Vue({
  el: "#app",
  components:{
    marquee,
    flag,
    auth,
    projects,
  }
});

module.hot.accept();
 
