<template>
 <div class='project'>
  project page
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
  created() {
    console.log('this is project page');
  }, 
};
</script>

<style lang="scss" scoped>
  .projects {
    margin: 20px;
  }
</style>
