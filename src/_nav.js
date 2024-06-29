export default [
  {
    component: 'CNavItem',
    name: 'داشبورد',
    to: '/dashboard',
    icon: 'cil-speedometer',
  },
  {
    component: 'CNavItem',
    name: 'پروفایل',
    to: '/profile',
    icon: 'cil-user',
  },
  {
    component: 'CNavItem',
    name: 'ولت',
    to: '/balances',
    icon: 'cil-dollar',
  },
  {
    component: 'CNavItem',
    name: 'پلن ها',
    icon: 'cil-list',
    items: [
      {
        component: 'CNavItem',
        name: 'خرید پلن',
        to: '/plan',
      },
      {
        component: 'CNavItem',
        name: 'پلن های من',
        to: '/plans',
      },
    ],
  },
  {
    component: 'CNavItem',
    name: 'ماینر ها',
    icon: 'cil-star',
    items: [
      {
        component: 'CNavItem',
        name: 'خرید ماینر',
        to: '/miner',
      },
      {
        component: 'CNavItem',
        name: 'ماینر های من',
        to: '/miners',
      },
    ],
  },
  {
    component: 'CNavGroup',
    name: 'تاریخچه',
    to: '/base',
    icon: 'cil-calendar',
    items: [
      {
        component: 'CNavItem',
        name: '  واریز و برداشت',
        to: '/transactions',
      },
      // {
      //   component: 'CNavItem',
      //   name: 'درآمد ها',
      //   to: '/profits',
      // },
    ],
  },
  {
    component: 'CNavGroup',
    name: 'موجودی ها',
    to: '/buttons',
    icon: 'cil-cursor',
  },
  {
    component: 'CNavGroup',
    name: 'کسب درآمد',
    to: '/forms',
    icon: 'cil-people',
    items: [
      {
        component: 'CNavItem',
        name: 'استخدام تریدر',
        to: '/jobs',
      },
      {
        component: 'CNavItem',
        name: 'استخدام برنامه نویس',
        to: '/jobs',
      },
      {
        component: 'CNavItem',
        name: 'معرفی به دوستان',
        to: '/referral',
      },
    ],
  },
  /*  {
      component: 'CNavItem',
      name: 'شارژ حساب',
      to: '/charge',
      icon: 'cil-chart-pie',
    },
    {
      component: 'CNavItem',
      name: 'برداشت',
      to: '/withdraw',
      icon: 'cil-chart-pie',
    },
  */
  {
    component: 'CNavItem',
    name: 'تیکت',
    to: '/tickets',
    icon: 'cil-envelope-open',
  },
  {
    component: 'CNavItem',
    name: 'خروج',
    to: '/logout',
    icon: 'cil-calculator',
  },
]
