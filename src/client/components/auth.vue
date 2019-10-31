<template>
    <form method="post" enctype="multipart/form-data">
        <input type="text" name="login" v-model="login" >
        <input type="password" name="password" v-model="password">
        <button name="submit" @click.prevent="tryAuth">Отправить</button>
    </form>
</template>
<script>
import {axios} from "axios";

const backEndApi = 'http://localhost:2000';

export default {
    data:function()
    { 
        return {
            login:"",
            password:""
        }
    },
    methods: {
      tryAuth: function () {
        const { login, password } = this;
        const creds = JSON.stringify({ login, password });
        this.axios.post(backEndApi + '/auth', { username: login, password:password })
        .then((response) => {
          console.log(response);
          window.location = backEndApi;
        })
        .catch((error) => {
          console.log('an error has occured')
          console.log(error);
        });
      }
    }
}
</script>