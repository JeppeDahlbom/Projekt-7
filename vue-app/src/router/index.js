import { createRouter, createWebHistory } from 'vue-router'
import News from '../views/News.vue'
import Billetter from '../views/Billetter.vue'
import FanOfTheMonth from '../views/FanOfTheMonth.vue'
import Menu from '../views/Menu.vue'
import Placement from '../views/Placement.vue'
import Season from '../views/Season.vue'
import Songs from '../views/Songs.vue'
import Squad from '../views/Squad.vue'
import Transfer from '../views/Transfer.vue'



const routes = [
  { path: '/', name: 'Nyheder', component: News },
  { path: '/billetter', name: 'Køb billet', component: Billetter },
  { path: '/MånedensFan', name: 'Månedens fan', component: FanOfTheMonth },
  { path: '/Menu', name: 'Menu', component: Menu },
  { path: '/Placering', name: 'Placering', component: Placement },
  { path: '/Sæson', name: 'Sæson', component: Season },
  { path: '/Sange', name: 'Sang katalog', component: Songs },
  { path: '/Holdet', name: 'Truppen', component: Squad },
  { path: '/Udskiftninger', name: 'Udskifninger', component: Transfer }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
