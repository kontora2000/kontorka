<template>
 <div class='project' @dblclick="setActiveProject">
   <p class='project-title'>title: {{ project.title }}</p>
  <p class='project-content' >
    content:
    <span class='project-content-body' v-html="project.content"></span>
  </p>
 </div>
</template>
<script>

export default {
  name: 'project',
  props: {  
    project: {
      type: Object,
    },
  },
  methods: {
    setActiveProject() {
      this.$emit('openForm', { openForm: true, formIsAdd: false, });
      this.$store.commit('SET_ACTIVE_PROJECT', this.project);
    },
  },
};
</script>

<style lang="scss" scoped>

.project {
  display: flex;
  flex-direction: column;

  &-content {
    &-body {
      & /deep/ img {
        object-fit: cover;
        max-width: 100%;
      }
    }
  }
}
</style>
