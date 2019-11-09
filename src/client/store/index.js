/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';


Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    user: null,
    projects: null,
    project: null,
  },

  getters: {
    user: (state) => state.user,
    projects: (state) => state.projects,
  },

  mutations: {
    SET_PROJECTS: (state, payload) => {
      state.projects = payload.projects;
    },

    ADD_USER: (state, payload) => {
      state.user = payload;
    },

    ADD_PROJECT: (state, payload) => {
      state.projects = [payload, ...state.projects];
    },
 
  },

  actions: {
    // eslint-disable-next-line no-unused-vars
    async GET_PROJECTS(context, payload) {
      const { data, } = await axios.get(`${process.env.BACKEND_API}/projects`);
      context.commit('SET_PROJECTS', data);
    },

    async SAVE_USER(context, { username, password, }) {
      const { data: { user, }, } = await axios.post(
        `${process.env.BACKEND_API}/auth`,
        { username, password, }
      );
      context.commit('ADD_USER', user);
    },

    async SAVE_PROJECT(context, projectData) {
      const { data: { project, }, } = await axios.post(
        `${process.env.BACKEND_API}/projects`,
        projectData
      );
      context.commit('ADD_PROJECT', project);
      // context.dispatch('GET_PROJECTS');
    },
  },
});
