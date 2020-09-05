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
        component: () => import(/** webpackChunkName: "user" */'/@/pages/User'),
        // component: import('/@/pages/Home')
      },
      {
        path: 'about',
        name: 'About',
        component: ()=>import(/** webpackChunkName: "about" */'../pages/About')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;