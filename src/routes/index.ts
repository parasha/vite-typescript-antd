import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';
import store from '@/store/index';

import Account from './account';

export const routes: RouteRecordRaw[] | [] = [
  {
    path: '/',
    redirect: '/home',
    component: import('../layout/BasicLayout'),
    // 只有这里的 children 下面的路由会被算进侧边栏导航
    children: [
      {
        path: 'home',
        name: 'Home',
        meta: { title: '首页', hide: true, },
        component: () => import('@/pages/Home/index')
      },
      {
        path: 'chart',
        name: 'Chart',
        meta: { title: '图表' },
        component: () => import('@/pages/Chart/index'),
      },
      {
        path: 'antd',
        name: 'antd',
        meta: { title: 'antd 组件' },
        component: () => import('@/pages/Antd/index'),
        children: [
          {
            path: 'table',
            name: 'Antd-Table',
            meta: { title: '表格' },
            component: () => import('../pages/Antd/pages/Table/Table'),
          },
          {
            path: 'form',
            name: 'Antd-Form',
            meta: { title: '表单-jsx' },
            component: () => import('@/pages/Antd/pages/Form/jsx')
          },
        ],
      },
      {
        path: 'sfc',
        name: 'Sfc',
        meta: { title: '单页面组件' },
        component: () => import('@/pages/SFC/index.vue'),
      },
      {
        path: 'test',
        name: 'Test',
        meta: { title: '测试' },
        component: import('@/pages/test/index')
      }
    ]
  },
  // 账号相关：登录、注册、忘记密码……
  Account,
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  store.commit('changeSiderMenu', to.name)
  next();
})
export default router;