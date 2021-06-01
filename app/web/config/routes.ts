export default [
  {
    exact: false, path: '/', component: '@/layouts/index',
    routes: [
      { exact: true, path: '/', title: '', redirect: '/home' },
      { exact: true, path: '/home', title: 'home', component: '@/pages/home' },
      { exact: true, path: '/share', title: 'share', component: '@/pages/share' },
      { exact: true, path: '/bridge', title: 'bridge', component: '@/pages/bridge' },
      { exact: true, path: '/useDva', title: 'useDva', component: '@/pages/useDva' },
      { exact: true, path: '/useDva/:id', title: 'list', component: '@/pages/list' },
    ]
  }
];
