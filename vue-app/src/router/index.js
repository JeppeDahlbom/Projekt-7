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
  { path: '/MaanedensFan', name: 'Månedens fan', component: FanOfTheMonth },
  { path: '/Menu', name: 'MENU', component: Menu },
  { path: '/Placering', name: 'Stilling', component: Placement },
  { path: '/season', name: 'Sæsonen', component: Season },
  { path: '/Sange', name: 'Sang katalog', component: Songs },
  { path: '/Holdet', name: 'Truppen', component: Squad },
  { path: '/Transfers', name: 'Transfers', component: Transfer }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
