import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'
import CreateHall from '../views/CreateHall.vue'
import Hall from '../views/Hall.vue'
import CardPlay from '../views/room/CardPlay.vue'
import GamePlay from '../views/room/GamePlay.vue'
import CharTest from '../views/room/CharTest.vue'


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
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
