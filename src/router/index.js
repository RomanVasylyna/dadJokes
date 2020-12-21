import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import allJokes from '../views/allJokes.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/alljokes',
    name: 'All Jokes',
    component : allJokes
  }
]

const router = new VueRouter({
  routes
})

export default router
