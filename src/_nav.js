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
        to: '/forms/checks-radios',
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

  // {
  //   component: 'CNavItem',
  //   name: 'Download CoreUI',
  //   href: 'http://coreui.io/vue/',
  //   icon: { name: 'cil-cloud-download', class: 'text-white' },
  //   _class: 'bg-success text-white',
  //   target: '_blank'
  // },
  // {
  //   component: 'CNavItem',
  //   name: 'Try CoreUI PRO',
  //   href: 'http://coreui.io/pro/vue/',
  //   icon: { name: 'cil-layers', class: 'text-white' },
  //   _class: 'bg-danger text-white',
  //   target: '_blank'
  // }
]
