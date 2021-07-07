/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import createPersistedState from 'vuex-persistedstate';
import SecureLS from 'secure-ls';

const ls = new SecureLS({ isCompression: false, });

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    user: null,
    projects: [],
    activeProject: {
      title: '', size: '', content: '', url: '', hashTags: [],
    },
    undoProject: null,
    newProject: {
      title: '', size: '', content: '', url: '', hashTags: [],
    },
    openAdminForm: false,
  },

  getters: {
    user: (state) => state.user,
    projects: (state) => state.projects,
    activeProject: (state) => state.activeProject,
    undoProject: (state) => state.undoProject,
    newProject: (state) => state.newProject,
    openAdminForm: (state) => state.openAdminForm,
  },

  mutations: {
    HANDLE_ADMIN_FORM: (state, payload) => {
      state.openAdminForm = payload;
    },
    SET_PROJECTS: (state, payload) => {
      state.projects = payload.projects;
    },
    ADD_USER: (state, user) => {
      state.user = user;
    },
    SET_ACTIVE_PROJECT: (state, _id) => {
      const curProject = state.projects.find((p) => p._id === _id);
      const activeProject = curProject || state.newProject;
     
      state.undoProject = { ...activeProject, };
      state.activeProject = activeProject;
    },
    UNDO_PROJECT: (state, _id) => {
      const newProjects = state.projects.filter((p) => p._id !== _id);
     
      state.projects = [...newProjects, { ...state.undoProject, }];
    },
    SET_NEW_PROJECT: (state, payload) => {
      state.newProject = payload;
    },

    ADD_PROJECT: (state, project) => {
      state.projects = [project, ...state.projects];
    },
    UPDATE_PROJECT: (state, project) => {
      const newProjects = state.projects.filter((p) => p._id !== project._id);
      state.projects = [...newProjects, project];
    },
    REMOVE_PROJECT: (state, project) => {
      const newProjects = state.projects.filter((p) => p._id !== project._id);
      state.projects = [...newProjects, project];
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
      context.commit('SET_NEW_PROJECT', {
        title: '', size: '', content: '', url: '', hashTags: [],
      });
      // context.dispatch('GET_PROJECTS');
    },

    async EDIT_PROJECT(context, projectData) {
      const { data: { project, }, } = await axios.put(
        `${process.env.BACKEND_API}/projects/${projectData._id}`,
        projectData
      );
  
      context.commit('UPDATE_PROJECT', project);
      // context.dispatch('GET_PROJECTS');
    },
    async REMOVE_PROJECT(context, { _id, isRemoveable, }) {
      const { data: { project, }, } = await axios.patch(
        `${process.env.BACKEND_API}/projects/${_id}`,
        { isRemoveable, }
      );
  
      context.commit('REMOVE_PROJECT', project);
      // context.dispatch('GET_PROJECTS');
    },
  },
  plugins: [
    createPersistedState({
      storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key),
      },
    })
  ],
});
