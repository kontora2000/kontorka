<template>
  <div class="marquee" :class="side">
    <div class="marquee-inner" :class="mside">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { TweenMax, Power2, TimelineMax } from 'gsap/TweenMax';

export default {
  data() {
    return {
      timeline: null,
      x: 0,
      y: 0,
      dx: 0,
      dy: 0, 
      speed: 10,
      mside: '',
    };
  },
  props: {
    side: String,
  },
  mounted() {
    this.mside = `m${this.side}`;
    this.timeline = new TimelineMax({ repeat: -1, paused: true, });
    switch (this.side) {
    case 'top': this.dx = -1 * this.speed,
    this.dy = 0;
      break;
    case 'bottom': this.dx = this.speed;
      this.dy = 0;
      break;
    case 'left': this.dy = -1 * this.speed;
      this.dx = 0;
      break;
    case 'right': this.dy = this.speed;
      this.dx = 0;
      break;
    default: break;      
    }
  // this.animationStart();
  },
  methods: {
    animationStart() {
      this.timeline.to(this.$el, 30, { x: `+=${this.dx}`, y: '-=1000', });
      this.timeline.play();
    },
    animationStop() {
      this.timeline.pause();
    },
  },
};
</script>
