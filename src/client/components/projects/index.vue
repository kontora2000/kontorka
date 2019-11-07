<template>
 <div class='projects'> 
    <div v-for="project in projects">
      <project :project="project" />
    </div>
  <!--<project v-for="project in projects"></project> -->
   
 </div>
</template>
<script>
import { mapGetters } from 'vuex';

// eslint-disable-next-line import/no-unresolved
import project from './project';

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    project,
  },
  computed: {
    ...mapGetters(['projects']),
  },
  mounted() {
    this.$store.dispatch('GET_PROJECTS');
    console.log(this.projects, 'this is projects page');
  }, 
};
</script>

<style lang="scss" scoped>
  .projects {
    margin: 20px;
  }
</style>
