import { createRouter, createWebHistory } from 'vue-router'
import DayPage from '@/views/Day/index'

const routes = [
  {
    path: '/',
    name: 'Day',
    component: DayPage
  },
  {
    path: '/month',
    name: 'Month',
    component: () => import('../views/Month/index.vue')
  },
  {
    path: '/year',
    name: 'Year',
    component: () => import('../views/Year/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
