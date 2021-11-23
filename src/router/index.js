import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Buscaminas from '../views/Buscaminas.vue'
import GameOver from '../views/GameOver.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/buscaminas',
    name: 'Buscaminas',
    component: Buscaminas
  },
  {
    path: '/buscaminasRaquel',
    name: 'BuscaminasRaquel',
    component: Buscaminas
  },
  {
    path: '/gameover/',
    name: 'GameOver',
    component: GameOver
  },
  {
    path: '/gameover/:celdasAbiertas/',
    name: 'GameOver',
    component: GameOver,
    props: true
  }
]

const router = new VueRouter({
  routes
})

export default router
