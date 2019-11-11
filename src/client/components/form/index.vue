<template>
  <form v-if="formIsShown" class="form" method="post" >
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
    <input class='form-input' type="text" name="title" v-model="title" placeholder='title'>
    <!--<input type="file" name="image" @change="handleUpload" > -->
    <textarea class='form-textarea' type="text" name="content" v-model="content"
      placeholder='content'></textarea>
    <input class='form-input' type="text" name="url" v-model="url" placeholder='url'>
    <div v-for="tag in TAGS">
       <input type="checkbox" :id="tag.value" :value="tag.value" v-model="hashTags">
        <label for="scales">{{ tag.name }}</label>
    </div>
    <button name="submit" @click.prevent="handleSubmit">Запилить</button>
    <button type="button" name="cancel" @click="closeForm">Закрыть форму</button>
  </form>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'formEl',
  data() {
    return {
      image: null,
      TAGS: [{
        name: 'Web',
        value: 'Web',
      }, {
        name: '3d',
        value: '3d',
      }, {
        name: 'Smm',
        value: 'Smm',
      }],
    };
  },
  computed: {
    ...mapGetters(['activeProject']),
    title: {
      get() {
        return this.activeProject.title;
      },
      set(newVal) {
        this.activeProject.title = newVal;
      },
    },
    content: {
      get() {
        return this.activeProject.content;
      },
      set(newVal) {
        this.activeProject.content = newVal;
      },
    },
    size: {
      get() {
        return this.activeProject.size;
      },
      set(newVal) {
        this.activeProject.size = newVal;
      },
    },
    url: {
      get() {
        return this.activeProject.url;
      },
      set(newVal) {
        this.activeProject.url = newVal;
      },
    },
    hashTags: {
      get() {
        return this.activeProject.hashTags;
      },
      set(newVal) {
        this.activeProject.hashTags = [...newVal];
      },
    },
  },
  props: {
    formIsShown: Boolean,
    formIsAdd: Boolean,
  },
  methods: {
    handleUpload({ target: { files, }, }) {
    // eslint-disable-next-line prefer-destructuring
      this.image = files[0];
    },
    closeForm() {
      if (this.formIsAdd) {
        this.$store.commit('SET_NEW_PROJECT', this.activeProject);
      } 

      if (this.activeProject._id) {
        this.$store.commit('UNDO_PROJECT', this.activeProject._id);
      }
  
      this.$emit('closeForm', { openForm: false, });
    },
    handleSubmit() {
      return this.activeProject._id ? this.editProject() : this.addProject();
    },
    editProject() {
      const {
        size, title, content, url, _id, hashTags,
      } = this.activeProject;

      this.$store.dispatch('EDIT_PROJECT',
        {
          size, title, content, url, _id, hashTags,
        });
      
      this.$emit('closeForm', { openForm: false, });
    },
    addProject() {
      const {
        size, title, content, url, hashTags, 
      } = this.activeProject;
      console.log('add propject');
      this.$store.dispatch('SAVE_PROJECT',
        {
          size, title, content, url, hashTags,
        });

      this.$emit('closeForm', { openForm: false, });
    },
  },
};
</script>
<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  max-width: 550px;
  width: 100%;
  margin: 10px 0 50px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  border: 1px solid #000;
  z-index: 999;

  &-input {
    height: 20px;
    margin: 5px 0;
  }

  &-textarea {
    height: 100px;
  }
}
</style>
