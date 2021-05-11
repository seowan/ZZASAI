import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    programme: [],
    username: "",
    adminflag: 0,
    roomname: "",
    roomcode: "",
    teamnumber: "",
    teams: [
      {
        text: "",
        currentpeople: "",
        teampeople: "",
        disabled: "",
      },
    ],
    m: 0,
    b: 0,
    t: 0,
    i: 0,
    socket: null,
  },
  mutations: {
    CREATE_PROGRAMME: function(state, item) {
      state.programme.push(item);
    },
    CREATE_USERNAME: function(state, name) {
      // state.username.push(name)
      state.username = name;
    },
    CREATE_ROOMNAME: function(state, name) {
      state.roomname = name;
    },
    CREATE_ROOMCODE: function(state, code) {
      state.roomcode = code;
    },
    CREATE_TEAMNUMBER: function(state, teamnumber) {
      state.teamnumber = teamnumber;
    },
    CREATE_TEAMS(state, payload) {
      state.teams.push(payload);
    },
    BTN_STATUS_BLOCK(state, index, value) {
      state.teams[index].disabled = value;
    },
    SET_ADMINFLAG: function(state) {
      state.adminflag = 1;
    },
    myes: function(state) {
      state.m = 1;
    },
    mno: function(state) {
      state.m = 2;
    },
    byes: function(state) {
      state.b = 1;
    },
    bno: function(state) {
      state.b = 2;
    },
    tyes: function(state) {
      state.t = 1;
    },
    tno: function(state) {
      state.t = 2;
    },
    iyes: function(state) {
      state.i = 1;
    },
    ino: function(state) {
      state.i = 2;
    },
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState()],
});
