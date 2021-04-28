import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    programme: [],
    username:[]
  },
  mutations: {
    CREATE_PROGRAMME: function (state, item) {
      state.programme.push(item)
    },
    INSERT_USERNAME:function (state,name){
      state.username.push(name)
    }
  },
  actions: {
  },
  modules: {
  }
})
