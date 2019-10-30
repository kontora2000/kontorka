
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

import marquee from './components/marquee.vue'; //marques animated by greensock
import flag from './components/flag.vue';  //template wrapper for three.js flag renderer
import auth from './components/auth.vue';


Vue.use(VueAxios, axios)

new Vue({
  el: "#app",
  components:{
      marquee,
      flag,
      auth
  }
});

  module.hot.accept();
 
