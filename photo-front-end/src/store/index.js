import Vue from "vue";
import Vuex from "vuex";
import { apiLogin, apiGetPhotos } from "../api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: localStorage.getItem("token") || "",
    photos: []
  },
  getters: {
    getPhotoById(state) {
      return id => {
        return state.photos.find(item => item.id == id);
      };
    }
  },
  mutations: {
    login(state, payload) {
      state.token = payload;
    },
    updatePhotos(state, payload) {
      state.photos = payload;
    }
  },
  actions: {
    async login({ commit }, payload) {
      const { username, password } = payload;
      const res = await apiLogin({ username, password });
      const data = res.data.data;
      console.log(data.token);
      localStorage.setItem("token", data.token);
      commit("login", data.token);
    },
    getPhotos({ commit }) {
      apiGetPhotos().then(res => {
        console.log(res.data);

        commit("updatePhotos", res.data.data.photos);
      });
    }
  },
  modules: {}
});
