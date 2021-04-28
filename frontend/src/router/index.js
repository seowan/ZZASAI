import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import CreateHall from '../views/CreateHall.vue'
import Hall from '../views/Hall.vue'
import CardPlay from '../views/room/CardPlay.vue'
import GamePlay from '../views/room/GamePlay.vue'
import CharTest from '../views/room/CharTest.vue'
import HostName from '../views/room_register/HostName.vue'
import RoomName from '../views/room_register/RoomName.vue'
import UserName from '../views/room_register/UserName.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/create-hall',
    name: 'CreateHall',
    component: CreateHall
  },
  {
    path: '/hall',
    name: 'Hall',
    component: Hall
  },
  {
    path: '/card-play',
    name: 'CardPlay',
    component: CardPlay
  },
  {
    path: '/game-play',
    name: 'GamePlay',
    component: GamePlay
  },
  {
    path: '/char-test',
    name: 'CharTest',
    component: CharTest
  },
  {
    path: '/create/name',
    name: 'HostName',
    component: HostName
  },
  {
    path: '/create/room',
    name: 'RoomName',
    component: RoomName
  },
  {
    path: '/username',
    name: 'UserName',
    component: UserName
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
