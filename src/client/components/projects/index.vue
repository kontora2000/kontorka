<template>
 <div class='projects'>
    projects page
    <project />
 </div>
</template>
<script>
import { axios } from 'axios';
import { mapGetters } from 'vuex';

import project from './project';

export default {
  components: {
    project,
  },
  computed: {
    ...mapGetters(['projects']),
  },
  created() {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get(`${process.env.BACKEND_API}/projects`,
        {
          headers: {
            Authorization: token,
          }, 
        })
        .then((r) => console.log(r))
        .catch((e) => console.log(e));
    }
  }, 
};
</script>

<style lang="scss" scoped>
  .projects {
    margin: 20px;
  }
</style>
