<template>
  <div class='project' :class="{ 'project-removed': project.isRemoveable }">
    <a class='project-panel' @click="panelIsOpen = !panelIsOpen">...</a>
    <ul class='project-panel-ul' v-if="panelIsOpen">
      <li class='project-panel-ul-li' @click="setActiveProject">редактировать</li>
      <li class='project-panel-ul-li' v-if='!project.isRemoveable' @click="handleDel(true)">удалить</li>
      <li class='project-panel-ul-li' v-if='project.isRemoveable' @click="handleDel(false)">восстановить</li>
    </ul>
    <div class='project-content'>
      <div class='project-content-body' v-html="project.content"></div>
    </div>
    <div class='project-about'>
      <div class='project-about-title'>{{ project.title }}</div>
      <a class='project-about-url' href="#">{{ project.url }}</a>
    </div>
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
  display: grid;
  margin: .5rem;
  position: relative;

  &-panel {
    background-color: rgba(0,0,0,.08);
    border-radius: 10px;
    border-bottom: none;
    color: rgba(0,0,0,.56);
    display: inline-block;
    font-size: 3rem;
    height: 2rem;
    letter-spacing: .1em;
    line-height: .145;
    text-align: center;
    width: 4.625rem;
    position: absolute;
    left: 0;
    top: .75rem;
    z-index: 999;
    transition: all .15s ease-in-out;

    &:hover {
      background-color: var(--OrangeLinkBorder);
      color: var(--OrangeColor);
    }

    &-ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      position: absolute;
      left: 6.75rem;
      top: .75rem;
      z-index: 999;

      &-li {
        color: rgba(255,255,255,.8);
        cursor: pointer;
        font-size: 1.5rem;
        line-height: 1.5rem;
        margin: .5rem 0;
        padding: .25rem 0;
        mix-blend-mode: difference;
        transition: all .15s ease-in-out;

        &:first-child {
          margin-top: 0;
        }
        &:last-child {
          margin-bottom: 0;
        }

        &:hover {
          color: rgba(255,255,255,1);
        }
      }
    }
  }
  &-content {
    margin-left: -.5rem;
    width: calc(100% + 1rem);

    &-body {
      & /deep/ img {
        object-fit: cover;
        max-width: 100%;
      }
    }
  }
  &-about {
    font-size: 1.125rem;

    &-title,
    &-url {
      display: inline-block;
    }

    &-title {
      display: inline-block;
    }

    &-url {
      border-bottom-color: var(--BlueLinkBorder);
      color: var(--BlueColor);
      display: inline-block;
      float: right;
      text-align: right;
      text-transform: uppercase;

      &:hover {
        border-bottom-color: var(--OrangeLinkBorder);
        color: var(--OrangeColor);
      }
      &:visited {
        border-bottom-color: var(--PurpleLinkBorder);
        color: var(--PurpleColor);
      }
    }
  }
  &-removed {
    opacity: .32;
  }
}
</style>
