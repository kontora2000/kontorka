<template>
  <Moveable
    v-if="openAdminForm"
    class="moveable"
    v-bind="moveable"
    @drag="handleDrag"
    @resize="handleResize"
    @scale="handleScale"
    @rotate="handleRotate"
    @warp="handleWarp"
    @click.native="handleClick"
  >
    <div class="buttons able">
      <span v-for="(state, key, index) in states"
        :key="key"
        :class="{ selected: currentState === key }"
        @click="currentState = key"
      >
      <img :src="IMGS[index]" />
      {{ state }}
      </span>
    </div>
    <formEl />
  </Moveable>
</template>
<script>

import { mapGetters } from 'vuex';
import { Frame } from 'scenejs';
import Moveable from 'vue-moveable';
import formEl from '../form/index.vue';

export default {
  name: 'MovForm',
  components: {
    Moveable,
    formEl,
  },
  computed: {
    ...mapGetters(['openAdminForm']),
  },
  data: () => ({
    moveable: {
      draggable: true,
      throttleDrag: 1,
      resizable: false,
      throttleResize: 1,
      keepRatio: false,
      scalable: true,
      throttleScale: 0.01,
      rotatable: true,
      throttleRotate: 0.2,
      pinchable: true,
    },
    IMGS: [
      'https://raw.githubusercontent.com/daybrush/moveable/master/demo/images/resizable.gif',
      'https://raw.githubusercontent.com/daybrush/moveable/master/demo/images/scalable.gif',
      'https://raw.githubusercontent.com/daybrush/moveable/master/demo/images/warpable.gif'
    ],
    states: {
      scalable: 'Scalable',
      resizable: 'Resizable',
      warpable: 'Warpable',
    },
    currentState: 'scalable',
  }),
  methods: {
    handleClick({ target, }) {
      target.focus();
    },
    handleDrag({ target, left, top, }) {
      this.$frame.set('left', `${left}px`);
      this.$frame.set('top', `${top}px`);
      this.setTransform(target);
    },
    handleResize({ target, width, height, }) {
      this.$frame.set('width', `${width}px`);
      this.$frame.set('height', `${height}px`);
      this.setTransform(target);
    },
    // eslint-disable-next-line no-unused-vars
    handleScale({ target, scale, dist, }) {
      const scaleX = this.$frame.get('transform', 'scaleX') * dist[0];
      const scaleY = this.$frame.get('transform', 'scaleY') * dist[1];
      this.$frame.set('transform', 'scaleX', scaleX);
      this.$frame.set('transform', 'scaleY', scaleY);
      this.setTransform(target);
    },
    // eslint-disable-next-line no-unused-vars
    handleRotate({ target, dist, beforeDelta, }) {
      const deg = parseFloat(this.$frame.get('transform', 'rotate')) + beforeDelta;
      this.$frame.set('transform', 'rotate', `${deg}deg`);
      this.setTransform(target);
    },
    handleWarp({ target, delta, multiply, }) {
      this.$frame.set(
        'transform',
        'matrix3d',
        multiply(this.$frame.get('transform', 'matrix3d'), delta)
      );
      this.setTransform(target);
    },
    clearAllStates() {
      Object.keys(this.states).forEach((key) => {
        this.moveable[key] = false;
      });
    },
    setTransform(target) {
      // eslint-disable-next-line no-param-reassign
      target.style.cssText = this.$frame.toCSS();
    },
  },
  watch: {
    currentState(newState) {
      this.clearAllStates();
      this.moveable[newState] = true;
    },
  },
  mounted() {
    this.$frame = new Frame({
      width: '302px',
      height: '460px',
      left: '50%',
      top: '7%',
      transform: {
        translateX: '-50%',
        translateY: '-50%',
        rotate: '0deg',
        scaleX: 1,
        scaleY: 1,
        matrix3d: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
      },
    });
  },
};
</script>
<style lang="scss">

.rCSus2bap {
  opacity: 0;
}

.moveable {
  position: absolute;
  width: 326px;
  height: 460px;
  margin: 0 auto;
  top: 4%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
}

.buttons.able span {
  padding: 0;
  cursor: pointer;
}
.buttons {
  text-align: center;
  margin: 0;
  padding: 0 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
}

.buttons img {
  position: relative;
  height: 80px;
  margin: 0;
}

.buttons span:hover,
.buttons span.selected {
  color: red;
}
</style>
