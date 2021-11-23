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
    path: '/buscaminas/view',
    name: 'Buscaminas',
    component: Buscaminas
  },
  {
    path: '/buscaminasRaquel',
    name: 'BuscaminasRaquel',
    component: Buscaminas,
    props: {
      tipoMina: 1
    }
  },
  {
    path: '/buscaminasjoaquin',
    name: 'Buscaminasjoaquin',
    component: Buscaminas,
    props: {
      tipoMina: 2
    }
  },
  {
    path: '/BuscaminasJose',
    name: 'BuscaminasJose',
    component: Buscaminas,
    props: {
      tipoMina: 3
    }
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
