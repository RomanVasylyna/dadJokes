import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentJoke : 'This is a joke', //Current Joke (Home route)
    allJokes : [] //All Jokes is an array (Jokes route)
  },

  mutations: { //Sync updates component's status in the Vue store

  setCurrentJoke(state, payload) {
  this.currentJoke = payload;
  this.allJokes.push(payload);
  },

  },

  actions: {

  },

  modules: {

  },

  getters: {
  getCurrentJoke : state => state.currentJoke
  },
})
