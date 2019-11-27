<template>
 <div class='project' :class="{ 'project-removed': project.isRemoveable }">
   <img class='project-panel' src='/assets/_img/kro.jpg' @click="panelIsOpen = !panelIsOpen" />
   <ul v-if="panelIsOpen">
     <li @click="setActiveProject">Редактировать</li>
     <li v-if='!project.isRemoveable' @click="handleDel(true)">Удалить</li>
     <li v-if='project.isRemoveable' @click="handleDel(false)">Восстановить</li>
   </ul>
   <p class='project-title'>title: {{ project.title }}</p>

   sadsdz!!!!!
  <p class='project-content' >
    content:
    <span class='project-content-body' v-html="project.content"></span>
  </p>
 </div>
</template>
<script>

export default {
  name: 'project',
  data: () => ({
    panelIsOpen: false,
  }),
  props: {  
    project: {
      type: Object,
    },
  },
  methods: {
    handleDel(isRemoveable) {
      console.log(isRemoveable, 'val!!!');
      const { _id, } = this.project;
      this.$store.dispatch('REMOVE_PROJECT', { _id, isRemoveable, });
    },
    setActiveProject() {
      this.$store.commit('SET_ACTIVE_PROJECT', this.project._id);
      this.$store.commit('HANDLE_ADMIN_FORM', true);
    },
  },
};
</script>

<style lang="scss" scoped>

.project {
  position: relative;
  display: flex;
  flex-direction: column;

  &-panel {
    position: absolute;
    height: 20px;
    top: 30%;
  }
  &-content {
    &-body {
      & /deep/ img {
        object-fit: cover;
        max-width: 100%;
      }
    }
  }
  &-removed {
    opacity: .5;
  }
}
</style>
