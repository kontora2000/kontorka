
import Vue from 'vue';

import {store} from './store';

import marquee from './components/marquee.vue'; //marques animated by greensock
import flag from './components/flag.vue';  //template wrapper for three.js flag renderer
import auth from './components/auth.vue'; //auth page


new Vue({
  store,
  el: "#app",
  components:{
    marquee,
    flag,
    auth
  }
});

module.hot.accept();
 
