import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';


Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    user: null,
    projects: null
  },

  getters: {
    USER: state => {
      return state.user;
    },
  },

  mutations: {
    SET_PROJECTS: (state, payload) => {
      state.todos = payload;
    },

    ADD_USER: (state, payload) => {
      state.user = payload;
    },
  },

  actions: {
    GET_PROJECTS: async function (context, payload) {
      let {data} = await axios.get(process.env.BACKEND_API + '/projects');
      context.commit('SET_PROJECTS', data);
    },

    SAVE_USER: async function (context, {username, password}) {
      const { data: { user } } = await axios.post(
        process.env.BACKEND_API + '/auth',
        { username, password }
        );
      context.commit('ADD_USER', user);
    },
  },
});