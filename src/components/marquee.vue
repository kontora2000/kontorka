<template>
    <div class="marquue">
        <slot></slot>
    </div>
</template>

<script>
import {TweenMax, Power2, TimelineMax} from 'gsap/TweenMax';

export default {
    data:function(){
        return {
            timeline : null,
            dx:0,
            dy:0, 
            speed:10
        }
    },
    props:{
        side:String
    },
    mounted:function(){
        this.timeline = new TimelineMax();
        switch (this.side) {
            case 'top': this.dx=-1*this.speed,
                         this.dy=0;
                         break;
            case 'bottom':this.dx=this.speed;
                         this.dy=0;
                         break;
            case 'left': this.dy=-1*this.speed;
                         this.dx=0;
                         break;
            case 'right':this.dy=this.speed;
                         this.dx=0;
                         break;
            default:break      
        }
        this.animate();
    },
    methods:{
        animate() {

        }
    }
}
</script>