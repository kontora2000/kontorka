<template>
  <div class="flag" style="z-index: 106">
    <canvas id="canvas" style="width:100%;height:100%;background:transparent;"></canvas>
  </div>
</template>

<script>

// eslint-disable-next-line import/extensions
import { animate, init, onWindowResize } from '../three/Cloth.js';

export default {
  mounted() {
    init();
    animate();
    window.onresize = onWindowResize();
  },
};
</script>
