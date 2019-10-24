<template>
     <div class="flag" style="z-index: 106">
            <canvas id="canvas" style="width:100%;height:100%;background:transparent;"></canvas>
    </div>
</template>

<script>

import {animate,init} from '../three/Cloth.js';

export default {
    mounted:function(){
        init();
        animate();
        window.onresize = onWindowResize();
        
    } 
}
</script>