<template>
    <form method="post" enctype="multipart/form-data">
        <input type="text" name="username" v-model="username" >
        <input type="password" name="password" v-model="password">
        <button name="submit" @click.prevent="tryAuth">Отправить</button>
    </form>
</template>
<script>
import {mapGetters} from 'vuex';

export default {
  data: function () {
    return {
      username : '',
      password : '',
      token: '',
    }
  },
  computed : {
  ...mapGetters(['USER']),
  },
  methods: {
    tryAuth: function () {
      const { username, password, token } = this;
      this.$store.dispatch('SAVE_USER', { username, password });
    }
  }
}
</script>