import { createRouter, createWebHistory } from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout'

const routes = [
  {
    path: '',

    children: [
      {
        path: 'contact-us',

        component: () => import('@/views/pages/ContactUs'),
      },
      {
        path: 'about-us',

        component: () => import('@/views/pages/AboutUs'),
      },
      {
        path: 'register/:key',

        component: () => import('@/views/pages/Registerinv'),
      },
      {
        path: 'register',

        component: () => import('@/views/pages/Register'),
      },

      {
        path: 'resetpass/:key',

        component: () => import('@/views/pages/reset'),
      },


      {
        path: 'logout',

        component: () => import('@/views/pages/Logout'),
      },
      {
        path: '',

        component: () => import('@/views/pages/Index'),
      },


    ],
  },
  {
    path: '',

    component: DefaultLayout,
    children: [
      {
        path: '/dashboard',

        component: () => import('@/views/dashboard/Dashboard.vue'),
      },
      {
        path: '/profile',

        component: () => import('@/views/pages/Profile.vue'),
      },
      {
        path: '/plans',

        component: () => import('@/views/pages/Plans.vue'),
      },
      {
        path: '/plan',

        component: () => import('@/views/pages/Plan.vue'),
      },
      {
        path: '/miners',

        component: () => import('@/views/pages/miners.vue'),
      },
      {
        path: '/miner',

        component: () => import('@/views/pages/miner.vue'),
      },
      {
        path: '/transactions',

        component: () => import('@/views/pages/Transactions.vue'),
      },
      {
        path: '/profits',

        component: () => import('@/views/pages/Profits.vue'),
      },
      {
        path: '/jobs',

        component: () => import('@/views/pages/Jobs.vue'),
      },
      {
        path: '/charge/:id',

        component: () => import('@/views/pages/Charge.vue'),
      },
      {
        path: '/withdraw/:id',

        component: () => import('@/views/pages/Withdraw.vue'),
      },
      {
        path: '/cw/:id',

        component: () => import('@/views/pages/ChargeWithdraw.vue'),
      },
      {
        path: '/tickets',

        component: () => import('@/views/pages/Tickets.vue'),
      },
      {
        path: '/tickets/:id',

        component: () => import('@/views/pages/Ticket.vue'),
      },
      {
        path: '/balances',

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
