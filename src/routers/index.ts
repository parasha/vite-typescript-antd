import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
    name: 'UserLogin',
    component: import('/@/layout/userLayout'),
    children: [
      {
        path: 'home',
        name: 'Home',
        component: import('/@/pages/Home')
      },
      {
        path: 'user',
        name: 'User',
        component: () => import('/@/pages/User'),
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;