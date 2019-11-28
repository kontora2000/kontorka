<template>
  <div class='projects'> 
    <div class='project-wrapper' v-for="(project, key) in filteredProjects" :key="key" >
      <project :project="project" />
    </div>
    <a v-if="!openAdminForm" class='projects-add' alt="#" @click='handleProject'>+</a>
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
    ...mapGetters(['projects', 'newProject', 'openAdminForm']),
    filteredProjects() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return this.projects.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    },
  },
  mounted() {
    this.$store.dispatch('GET_PROJECTS');
  },
  methods: {
    handleProject() {
      this.$store.commit('SET_ACTIVE_PROJECT', this.newProject);
      this.$store.commit('HANDLE_ADMIN_FORM', true);
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
  transition: background 1s ease;


  &-add {
    background-color: var(--BlueLinkBorder);
    border-bottom: none;
    border-radius: 8rem;
    color: var(--BlueColor);
    cursor: pointer;
    font-size: 10rem;
    font-weight: 100;
    line-height: .63;
    text-align: center;
    width: 8rem;
    height: 8rem;
    transition: all .15s ease-in-out;

    &:hover {
      background-color: var(--OrangeLinkBorder);
      color: var(--OrangeColor);
    }
  }
}
</style>
