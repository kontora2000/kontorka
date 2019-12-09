<template>
  <vue-draggable-resizable :draggable="isDrag" :resizable="true" :disable-user-select="true">
    <formEl @DragResizeValue="updateValue" />
  </vue-draggable-resizable>
</template>
<script>

import { mapGetters } from 'vuex';
import VueDraggableResizable from 'vue-draggable-resizable';
import 'vue-draggable-resizable/dist/VueDraggableResizable.css'
// import { Frame } from 'scenejs';

//import Moveable from 'vue-moveable';
//import LongPress from 'vue-directive-long-press'

import formEl from '../form/index.vue';

export default {
  name: 'DragForm',
  components: {
    formEl,
  },
 
  computed: {
    ...mapGetters(['openAdminForm']),
  },
  data: () => ({
    isDrag: true,
  }),
  methods: {
    updateValue(event) {
      this.isDrag = event;
      console.log(event, 'updated value in parent');
    }
  },
  watch: {
  },
  mounted() {
  },
};
</script>
<style lang="scss">

</style>
