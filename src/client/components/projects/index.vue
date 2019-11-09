<template>
 <div class='projects'> 
    <div v-for="project in projects">
      <project :project="project" />
    </div>
    <img v-if="!addFormIsShown" class="projects-add" src='/assets/_img/button-plus.png' alt="#" @click="showAddForm" />
    <form v-if="addFormIsShown" class="projects-form" method="post" enctype="multipart/form-data" >
      <fieldset id="size">
        <label>
          Medium
          <input type="radio" value="medium" name="size" v-model="size">
        </label>
        <label>
          Small
          <input type="radio" value="small" name="size" v-model="size">
        </label>
        <label>
          Large
          <input type="radio" value="large" name="size" v-model="size">
        </label>
      </fieldset>
      <input type="text" name="title" v-model="title" placeholder='title'>
      <input type="file" name="image" @change="handleUpload" >
      <textarea type="text" rows='3' name="content" v-model="content" placeholder='content'></textarea>
      <input type="text" name="url" v-model="url" placeholder='url'>
      <button name="submit" @click.prevent="addProject">Добавить проект</button>
      <button name="cancel" @click="closeForm">Закрыть форму</button>
    </form>
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
  data() {
    return {
      addFormIsShown: false,
      image: null,
      title: '',
      content: '',
      size: '',
      url: '',
    };
  },
  mounted() {
    this.$store.dispatch('GET_PROJECTS');
  },
  methods: {
    handleUpload({ target: { files, }, }) {
      // eslint-disable-next-line prefer-destructuring
      this.image = files[0];
    },
    showAddForm() {
      this.addFormIsShown = true;
    },
    addProject() {
      const formData = new FormData();

      formData.append('title', this.title);
      formData.append('content', this.content);
      formData.append('size', this.size);
      formData.append('url', this.url);
      formData.append('image', this.image);
 
      this.$store.dispatch('SAVE_PROJECT', formData);

      this.addFormIsShown = false;

      this.title = '';
      this.content = '';
      this.size = '';
      this.image = '';
      this.url = '';
    },
    closeForm() {
      this.addFormIsShown = false;
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

     &-form {
      display: flex;
      flex-direction: column;
      max-width: 300px
    }
  }
</style>
