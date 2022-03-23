import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('../views/Dashboard/index.vue')
  },
  {
    path: '/headline',
    name: 'Headline',
    component: () => import('../views/Headline/index.vue')
  },
  {
    path: '/oilPrice',
    name: 'OilPrice',
    component: () => import('../views/OilPrice/index.vue')
  },
  {
    path: '/holiday',
    name: 'Holiday',
    component: () => import('../views/Holiday/index.vue'),
    children: [
      {
        path: 'day',
        name: 'Day',
        component: () => import('../views/Holiday/Day/index.vue')
      },
      {
        path: 'month',
        name: 'Month',
        component: () => import('../views/Holiday/Month/index.vue')
      },
      {
        path: 'year',
        name: 'Year',
        component: () => import('../views/Holiday/Year/index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
