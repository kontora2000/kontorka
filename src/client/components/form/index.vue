<template>  
  <form class="form" method="post" >
    <fieldset class="form-project-edit-sizepanel" id="size">
      <label class="form-project-edit-sizepanel-label">
        <input class="form-project-edit-input-radio" type="radio" value="small" name="size" v-model="size">
        <span class="form-project-edit-sizepanel-label-span">Small</span>
      </label>
      <label class="form-project-edit-sizepanel-label">
        <input class="form-project-edit-input-radio" type="radio" value="medium" name="size" v-model="size">
        <span class="form-project-edit-sizepanel-label-span">Medium</span>
      </label>
      <label class="form-project-edit-sizepanel-label">
        <input class="form-project-edit-input-radio" type="radio" value="large" name="size" v-model="size">
        <span class="form-project-edit-sizepanel-label-span">Large</span>
      </label>
    </fieldset>
    <div class="form-project-edit-fields">
      <div class="form-project-edit-header">
        <input class="form-input form-project-edit-title" type="text" name="title" v-model="title" placeholder='title'>
        <a class='form-project-edit-link-close' name="cancel" @click="closeForm">╳</a>
      </div>
      <!-- <input type="file" name="image" @change="handleUpload" > -->
      <textarea class='form-textarea form-project-edit-code' type="text" name="content" v-model="content"
        placeholder='content'></textarea>
      <input class='form-input form-project-edit-url' type="text" name="url" v-model="url" placeholder='://'>
      <div class="form-project-edit-tags">
        <div class="form-project-edit-tag" v-for="(tag, key) in TAGS" :key="key">
          <input  class="form-project-edit-checkbox" type="checkbox" :id="tag.value" :value="tag.value" v-model="hashTags">
          <label class="form-project-edit-tags-label" :for="tag.value"><span class="form-project-edit-tags-label-span">{{ tag.name }}</span></label>
        </div>
      </div>
      <button class="form-project-edit-button-post" name="submit" @click.prevent="handleSubmit">Запилить</button>
    </div>
  </form>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'formEl',
  data: () => ({
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
  }),
  computed: {
    ...mapGetters(['activeProject', 'openAdminForm']),
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
  methods: {
    handleUpload({ target: { files, }, }) {
    // eslint-disable-next-line prefer-destructuring
      this.image = files[0];
    },
    closeForm() {
      this.$store.commit('HANDLE_ADMIN_FORM', false);
      if (this.activeProject._id) {
        this.$store.commit('UNDO_PROJECT', this.activeProject._id);
      } else {
        this.$store.commit('SET_NEW_PROJECT', this.activeProject);
      }
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
      
      this.$store.commit('HANDLE_ADMIN_FORM', false);
    },
    addProject() {
      const {
        size, title, content, url, hashTags, 
      } = this.activeProject;

      this.$store.dispatch('SAVE_PROJECT',
        {
          size, title, content, url, hashTags,
        });

      this.$store.commit('HANDLE_ADMIN_FORM', false);
    },
  },
};
</script>
<style lang="scss" scoped>
.form {
  display: grid;
  grid-template-columns: 3rem calc(100% - 3rem);
  max-width: 550px;
  padding: 0;
  width: inherit;
  z-index: 9999;
  
  &-input {
    height: 1.25rem;
    margin: .25rem 0;
  }

  &-textarea {
    height: 100px;
  }
}

.form-project-edit-sizepanel {
  background: var(--BlueColor);
  border: none;
  grid-column: 1/2;
  grid-row: 1/2;
  padding: 0;
  width: 3rem;
  writing-mode: vertical-lr;
}

.form-project-edit-sizepanel-label {
  cursor: pointer;
  display: inline-block;
  margin: 0 .5rem;
  transform: rotate(-180deg);
}

.form-project-edit-sizepanel-label-span {
  border-radius: 100px;
  padding: .875rem .4rem;
}

.form-project-edit-input-radio {
  display: none;
}

.form-project-edit-input-radio:checked ~ .form-project-edit-sizepanel-label-span {
  background: var(--WhiteColor);
  color: var(--BlueColor);
}

.form-project-edit-fields {
  display: grid;
  grid-column: 2/3;
  grid-row: 1/2;
}

.form-project-edit-header {
  grid-column: 1/4;
  grid-row: 1/2;
  width: 100%;
}

.form-project-edit-title {
  width: 74%;
}

.form-project-edit-link-close {
  color: rgba(255,255,255,.8);
  border-bottom: none;
  display: inline-block;
  float: right;
  font-size: 2rem;
  margin-right: 1.5rem;
  position: relative;
  text-decoration: none;
  top: 1.15rem;
}

.form-project-edit-link-close:hover {
  color: var(--WhiteColor);
}

.form-project-edit-code {
  font-family: 'PT Mono', monospace;
  grid-column: 1/4;
  grid-row: 2/3;
}

.form-project-edit-url {
  grid-column: 1/3;
  grid-row: 3/4;
}

.form-project-edit-tags {
  grid-column: 1/3;
  grid-row: 4/6;
  margin: .375rem .75rem .5rem;
}

.form-project-edit-tag {
  display: inline-block;
  margin: .125rem .25rem;
}
.form-project-edit-tag:first-child {
  margin-left: 0;
}
.form-project-edit-tag:last-child {
  margin-right: 0;
}

.form-project-edit-checkbox {
  display: none;
}

.form-project-edit-tags-label {
  cursor: pointer;
  background: transparent;
  border: 1px solid var(--BlueColor);
  border-radius: 100px;
  color: var(--BlueColor);
  display: inline-block;
  padding: .5rem .875rem;
  transition: all .15s ease-in-out;
}

.form-project-edit-tags-label:hover {
  background: rgba(0,85,255,.32);
}

.form-project-edit-checkbox:checked ~ .form-project-edit-tags-label {
  background: var(--BlueColor);
  color: var(--WhiteColor);
}

.form-project-edit-tags-label-span:before {
  content: '#';
  display: inline-block;
  margin-right: .2rem;
}

.form-project-edit-checkbox:checked ~ .form-project-edit-tags-label > .form-project-edit-tags-label-span:before {
  content: '╳';
}

.form-project-edit-button-post {
  background: radial-gradient(100% 100% at 100% 0%, #00AFFF 0%, #0055FF 100%);
  border-radius: 1000px;
  border: none;
  color: var(--WhiteColor);
  cursor: pointer;
  grid-column: 3/4;
  grid-row: 3/6;
  font-size: 1.25rem;
  height: 8rem;
  margin: .5rem 0;
  line-height: 1;
  padding: 0;
  width: 8rem;
}
</style>