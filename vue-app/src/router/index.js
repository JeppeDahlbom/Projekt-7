import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Billetter from '../views/Billetter.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/billetter', component: Billetter }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
