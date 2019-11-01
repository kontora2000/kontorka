<template>
    <div class="marquee" :class="side">
          <div class="marquee-inner" :class="mside">
          <template v-for="i in 80">
               <slot></slot>
           </template>
          </div>
          
    </div>
</template>

<script>
import {TweenMax, Power2, TimelineMax} from 'gsap/TweenMax';

export default {
    data:function(){
        return {
            timeline : null,
            startX:0,
            startY:0,
            dx:0,
            dy:0, 
            speed:1000,
            mside:''
        }
    },
    props:{
        side:String
    },
    mounted:function(){
        this.mside = 'm'+this.side;
        this.timeline = new TimelineMax({repeat:-1,paused:true});
        switch (this.side) {
            case 'top': this.dx=`-=${this.speed}`,
                         this.dy=0;
                         break;
            case 'bottom': this.dx=`+=${this.speed}`;
                         this.dy=0;
                         break;
            case 'left': this.dy=-1*this.speed;
                         this.dy=`-=${this.speed}`;
                         break;
            case 'right':this.dx=0;
                         this.dy=`+=${this.speed}`;
                         break;
            default:break      
        }
  // this.animationStart();
    },
    methods:{
        animationStart() {
            this.timeline.to(this.$el, 30, {x:this.dx,y:this.dy});
            this.timeline.play();
        },
        animationStop(){
            this.timeline.pause();
        }
    }
}
</script>