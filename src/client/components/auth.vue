<template>
    <form method="post">
      <input type="text" name="username" v-model="username" >
      <input type="password" name="password" v-model="password">
      <button name="submit" @click.prevent="tryAuth">Отправить</button>
    </form>
</template>
<script>
// import { mapGetters } from 'vuex';
import { mapState } from 'vuex';

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  computed: {
    ...mapState(['user']),
  },
  methods: {
    tryAuth() {
      const { username, password, } = this;
      this.$store.dispatch('SAVE_USER', { username, password, });
    },
  },
  watch: {
    user() {
      if (this.user.token) {
        window.location.href = '/';
      }
    },
  },
};
</script>
