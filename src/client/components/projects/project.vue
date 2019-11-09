<template>
 <div class='project' @dblclick="showEditForm">
  title: {{ project.title }}
  <img class="project-img" :src="project.path" />
   <form v-if="editFormIsShown" class="project-form" method="post" enctype="multipart/form-data" >
      <fieldset id="size">
        <label>
          Medium
          <input type="radio" value="medium" name="size" v-model="project.size">
        </label>
        <label>
          Small
          <input type="radio" value="small" name="size" v-model="project.size">
        </label>
        <label>
          Large
          <input type="radio" value="large" name="size" v-model="project.size">
        </label>
      </fieldset>
      <input type="text" name="title" v-model="project.title" placeholder='title' >
      <input type="file" name="image" @change="handleUpload" >
      <textarea type="text" rows='3' name="content" v-model="project.content" placeholder='content'></textarea>
      <input type="text" name="url" v-model="project.url" placeholder='url'>
      <button name="submit" @click.prevent="editProject">Изменить проект</button>
      <button type='button' name="cancel" @click="closeForm">Закрыть форму</button>
    </form>
 </div>
</template>
<script>

export default {
  data() {
    return {
      editFormIsShown: false,
    };
  },
  props: {  
    project: {
      type: Object,
    },
  },
  methods: {
    editProject() {
      console.log('edit propject');
    },
    showEditForm() {
      this.editFormIsShown = !this.editFormIsShown;
      console.log('edit form');
    },
    closeForm() {
      console.log('close form');
      this.editFormIsShown = false;
    },
    handleUpload({ target: { files, }, }) {
      // eslint-disable-next-line prefer-destructuring
      this.image = files[0];
    },
  },
};
</script>

<style lang="scss" scoped>
  .project {
    display: flex;
    flex-direction: column;
  
    &-img {
      object-fit: cover;
      max-width: 100%;
    }

     &-form {
      display: flex;
      flex-direction: column;
      max-width: 300px;
      margin: 10px 0 50px;
    }
  }
</style>
