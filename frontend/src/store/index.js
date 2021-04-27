import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    programme: []
  },
  mutations: {
    CREATE_PROGRAMME: function (state, item) {
      state.programme.push(item)
    }
  },
  actions: {
  },
  modules: {
  }
})
