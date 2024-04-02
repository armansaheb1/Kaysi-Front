import { createRouter, createWebHistory } from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout'

const routes = [
  {
    path: '/',
    name: 'Pages',
    children: [
      {
        path: '404',
        name: 'Page404',
        component: () => import('@/views/pages/Page404'),
      },
      {
        path: '500',
        name: 'Page500',
        component: () => import('@/views/pages/Page500'),
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/views/pages/Login'),
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import('@/views/pages/Register'),
      },
      {
        path: '',
        name: 'index',
        component: () => import('@/views/pages/Index'),
      },
      {
        path: 'logout',
        name: 'logout',
        component: () => import('@/views/pages/Logout'),
      },
    ],
  },
  {
    path: '/',
    name: 'Home',
    component: DefaultLayout,
    redirect: '/',
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ '@/views/dashboard/Dashboard.vue'
          ),
      },
      {
        path: '/theme',
        name: 'Theme',
        redirect: '/theme/typography',
      },
      {
        path: '/profile',
        name: 'Profile',
        component: () => import('@/views/pages/Profile.vue'),
      },
      {
        path: '/plans',
        name: 'plans',
        component: () => import('@/views/pages/Plans.vue'),
      },
      {
        path: '/transactions',
        name: 'transactions',
        component: () => import('@/views/pages/Transactions.vue'),
      },
      {
        path: '/profits',
        name: 'profits',
        component: () => import('@/views/pages/Profits.vue'),
      },
      {
        path: '/jobs',
        name: 'jobs',
        component: () => import('@/views/pages/Jobs.vue'),
      },
      {
        path: '/charge',
        name: 'charge',
        component: () => import('@/views/pages/Charge.vue'),
      },
      {
        path: '/withdraw',
        name: 'withdraw',
        component: () => import('@/views/pages/Withdraw.vue'),
      },
      {
        path: '/ticket',
        name: 'ticket',
        component: () => import('@/views/pages/Ticket.vue'),
      },
      {
        path: '/balances',
        name: 'balances',
        component: () => import('@/views/pages/Balances.vue'),
      },

    ],
  },
  
]

const router = createRouter({
  // eslint-disable-next-line no-undef
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
