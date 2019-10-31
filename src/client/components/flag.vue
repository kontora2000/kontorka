<template>
     <div class="flag" style="z-index: 106">
            <canvas id="canvas" style="width:100%;height:100%;background:transparent;"></canvas>
    </div>
</template>

<script>

import {animate,init, onWindowResize} from '../three/Cloth.js';

export default {
    mounted: function() {
      init();
      animate();
      window.onresize = onWindowResize();
  },
  created: function() {
    const token = localStorage.getItem('token');
    if (token) {
      this.axios.get(process.env.BACKEND_API + '/projects',
      {
        headers: {
          Authorization: token,
        } 
      })
      .then((r) => console.log(r))
      .catch((e) => console.log(e));
    }
  } 
}
</script>