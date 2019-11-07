<template>
 <div class='project'>
  project page
 </div>
</template>
<script>
import {axios} from "axios";

export default {
  data: function () {
    return {
      username : "",
      password : "",
      token: '',
    }
  },
  created: function() {
    console.log('this is project page');
  } 
}
</script>

<style lang="scss" scoped>
  .projects {
    margin: 20px;
  }
</style>