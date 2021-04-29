import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    programme: [],
    username:'',
    roomname: '',
    roomcode: '',
  },
  mutations: {
    CREATE_PROGRAMME: function (state, item) {
      state.programme.push(item)
    },
    CREATE_USERNAME:function (state, name) {
      // state.username.push(name)
      state.username = name
    },
    CREATE_ROOMNAME: function (state, name) {
      state.roomname = name
    },
    CREATE_ROOMCODE: function (state, code) {
      state.roomcode = code
    }
  },
  actions: {
  },
  modules: {
  }
})
