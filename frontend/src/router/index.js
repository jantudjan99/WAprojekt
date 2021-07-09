import { createRouter, createWebHistory } from 'vue-router'
import Pocetna from '../views/pocetna.vue'
import Dogadaji from '../views/dogadaji.vue'
/*import jednaIgra from '../components/jednaIgra.vue'*/


const routes = [
  {
    path: '/',
    name: 'Pocetna',
    component: Pocetna
  },
  {
    path: '/dogadaji',
    name: 'Dogadaji',
    component: () => import('../views/dogadaji.vue'),
  },
  {
      path: '/detalji/:id',
      props: true,
      name: 'Detalji',
      component: () => import('../views/detalji.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
