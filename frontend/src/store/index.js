import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    programme: [],
    userlist: [],
    userinfo: {
      username: "",
      team: "",
      score: 0,
    },
    userlist_boolean: [],
    adminflag: 0,
    roomname: "",
    roomcode: "",
    // 방장이 선택한 나누려는 팀 수
    teamnumber: 0,
    //teams: 팀 정보
    // text: n팀 , currentpeople: 현재 해당 팀 선택한 사람, teampeople: 해당 팀에 분배된 사람 수, disabled: 버튼 비활성화
    teams: [
      {
        text: "",
        currentpeople: "",
        teampeople: 0,
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
      // state.username = name;
      state.userinfo.username = name;
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
    CREATE_USERTEAM: function(state, team) {
      state.userinfo.team = team;
    },
    BTN_STATUS_BLOCK(state, index, value) {
      state.teams[index].disabled = value;
    },
    SET_ADMINFLAG: function(state) {
      state.adminflag = 1;
    },
    RESTORE_ADMINFLAG:function(state){
      state.adminflag = 0;
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
    PUSH_USERLIST: function(state, name) {
      state.userlist.push(name);
    },
    PUSH_USERLIST_BOOLEAN: function(state, bool) {
      state.userlist_boolean.push(bool);
    },
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState()],
});
