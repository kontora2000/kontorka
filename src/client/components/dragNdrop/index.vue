<template>
  <Moveable
    class="moveable"
    v-bind="moveable"
    @drag="handleDrag"
    @resize="handleResize"
    @scale="handleScale"
    @rotate="handleRotate"
    @warp="handleWarp"
    @pinch="handlePinch"
  >
    <span>Vue Moveable</span>
  </Moveable>
</template>
<script>
import Moveable from 'vue-moveable';

export default {
  name: 'app',
  components: {
    Moveable,
  },
  data: () => ({
    moveable: {
      draggable: true,
      throttleDrag: 0,
      resizable: false,
      throttleResize: 1,
      keepRatio: false,
      scalable: true,
      throttleScale: 0,
      rotatable: true,
      throttleRotate: 0,
      pinchable: true, // ["draggable", "resizable", "scalable", "rotatable"]
      origin: false,
    },
  }),
  methods: {
    handleDrag({ target, transform, }) {
      console.log('onDrag left, top', transform);
      target.style.transform = transform;
    },
    handleResize({
      target, width, height, delta,
    }) {
      console.log('onResize', width, height);
      delta[0] && (target.style.width = `${width}px`);
      delta[1] && (target.style.height = `${height}px`);
    },
    handleScale({ target, transform, scale, }) {
      console.log('onScale scale', scale);
      target.style.transform = transform;
    },
    handleRotate({ target, dist, transform, }) {
      console.log('onRotate', dist);
      target.style.transform = transform;
    },
    handleWarp({ target, transform, }) {
      console.log('onWarp', transform);
      target.style.transform = transform;
    },
    handlePinch({ target, }) {
      console.log('onPinch', target);
    },
  },
};
</script>
