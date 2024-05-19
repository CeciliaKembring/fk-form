import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/mainForm',
      name: 'mainForm',
      component: () => import('../views/MainFormView.vue')
    },
    {
      path: '/savePage',
      name: 'savePage',
      component: () => import('../views/SaveView.vue')
    }
  ]
})

export default router
