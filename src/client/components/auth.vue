<template>
    <form method="post" enctype="multipart/form-data">
        <input type="text" name="username" v-model="username" >
        <input type="password" name="password" v-model="password">
        <button name="submit" @click.prevent="tryAuth">Отправить</button>
    </form>
</template>
<script>
import {axios} from "axios";

export default {
  data: function () {
    return {
      username : "",
      password : "",
      token: '',
    }
  },
  methods: {
    tryAuth: function () {
      const { username, password, token } = this;
      console.log(process.env.BACKEND_API + '/auth');
      const backEndApi = process.env.BACKEND_API + '/auth';
      this.axios.post(
        backEndApi,
       { username, password },
       {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .then((response) => {
        const { token } = response.data.user;

        this.token = token;
        this.axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
        localStorage.setItem('token', `Bearer ${token}`);
        
        window.location = 'http://localhost:8000';
      })
      .catch((error) => {
        console.log('an error has occured')
        console.log(error);
      });
    }
  }
}
</script>