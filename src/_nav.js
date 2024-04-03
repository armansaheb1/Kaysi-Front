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
    name: 'موجودی ها',
    to: '/balances',
    icon: 'cil-dollar',
  },
  {
    component: 'CNavItem',
    name: 'پلن ها',
    to: '/plans',
    icon: 'cil-list',
  },
  {
    component: 'CNavGroup',
    name: 'تاریخچه',
    to: '/base',
    icon: 'cil-calendar',
    items: [
      {
        component: 'CNavItem',
        name: 'پرداخت و واریز',
        to: '/transactions',
      },
      {
        component: 'CNavItem',
        name: 'درآمد ها',
        to: '/profits',
      },
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
        name: 'استخدام برنانه نویس',
        to: '/jobs',
      },
      {
        component: 'CNavItem',
        name: 'معرفی به دوستان',
        to: '/referral',
      },
    ],
  },
  {
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
  {
    component: 'CNavItem',
    name: 'تیکت',
    to: '/ticket',
    icon: 'cil-envelope-open',
  },
  {
    component: 'CNavItem',
    name: 'خروج',
    to: '/logout',
    icon: 'cil-calculator',
  },
]
