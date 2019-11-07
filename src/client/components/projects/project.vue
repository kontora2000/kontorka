<template>
 <div class='project'>
  child asdasdsd
  <img :src="project.path" />
 </div>
</template>
<script>

export default {
  data() {
    return {
      username: '',
      password: '',
      token: '',
    };
  },
  props: {  
    project: {
      type: Object,

    },
  },
  mounted() {
    console.log(this.project, 'child page');
  }, 
};
</script>

<style lang="scss" scoped>
  .projects {
    margin: 20px;
  }
</style>
