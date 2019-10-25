
import {Stats} from  './three/stats.min.js';
import Vue from 'vue';
import marquee from './components/marquee.vue'; //marques animated by greensock
import flag from './components/flag.vue';  //template wrapper for three.js flag renderer
import auth from './components/auth.vue';


new Vue({
  el: "#app",
  components:{
      marquee,
      flag,
      auth
  }
});