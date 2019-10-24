<template>
    <form>
        <input type="text" name="login" v-model="login" >
        <input type="password" name="password" v-model="passwrod">
        <button name="submit" @click.prevent="tryAuth">Отправить</button>
    </form>
</template>
<script>
import {axios} from "axios";
export default {
    data:function()
    { 
        return {
            login:"",
            passwrod:""
        }
    },
    methods: {
        tryAuth:()=>{
            
        }
    }
}
</script>