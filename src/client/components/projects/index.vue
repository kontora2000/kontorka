<template>
 <div class='projects'> 
    <div v-for="project in filteredProjects">
      <project :project="project"  @openForm="handleFormShow" />
    </div>
    <img v-if="!formIsShown" class="projects-add"
     src='/assets/_img/button-plus.png'
     alt="#" @click='handleProject' />
    <formEl :formIsShown="formIsShown" :formIsAdd="formIsAdd" @closeForm="handleFormShow" />
 </div>
</template>
<script>
import { mapGetters } from 'vuex';

// eslint-disable-next-line import/no-unresolved
import project from './project';
// eslint-disable-next-line import/no-unresolved
import formEl from '../form/index.vue';

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    formEl,
    project,
  },
  computed: {
    ...mapGetters(['projects', 'newProject']),
    filteredProjects() {
      return this.projects.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    },
  },
  data() {
    return {
      formIsShown: false,
      formIsAdd: false,
    };
  },
  mounted() {
    this.$store.dispatch('GET_PROJECTS');
  },
  methods: {
    handleFormShow(e) {
      this.formIsShown = e.openForm;
      this.formIsAdd = e.formIsAdd;
    },
    handleProject() {
      this.formIsShown = true;
      this.formIsAdd = true;

      if (this.newProject) {
        this.$store.commit('SET_ACTIVE_PROJECT', this.newProject);
      } else {
        this.$store.commit('SET_NEW_PROJECT', {
          title: '', size: '', content: '', url: '', hashTags: [],
        });
        this.$store.commit('SET_ACTIVE_PROJECT', this.newProject);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.projects {
  grid-template-columns: repeat(3, calc(100vw/3));
  // grid-template-rows: minmax(80vh, auto);
  grid-auto-flow: row dense;
  grid-column-gap: 10px;
  grid-row-gap: 10vh;
  overflow-x: hidden;
  transition: background 1s ease;


  &-add {
    max-width: 150px;
    margin: 20px;
    cursor: pointer;
  }
}
</style>
