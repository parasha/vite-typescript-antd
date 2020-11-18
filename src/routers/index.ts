import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';
import store from '/@/store/index';

export const routes: RouteRecordRaw[] | [] = [
  {
    path: '/',
    redirect: '/home',
    name: 'UserLogin',
    component: import('../layout/BasicLayout'),
    // 只有这里的 children 下面的路由会被算进侧边栏导航
    children: [
      {
        path: 'home',
        name: 'Home',
        meta: { title: '首页', hide: true, },
        component: import('/@/pages/Home/index')
      },
      {
        path: 'chart',
        name: 'Chart',
        meta: { title: '图表' },
        component: () => import('/@/pages/Chart/index'),
      },
      {
        path: 'antd',
        name: 'antd',
        meta: { title: 'antd 组件' },
        component: () => import('/@/pages/Antd/index'),
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
            component: () => import('/@/pages/Antd/pages/Form/jsx')
          },
        ],
      },
      {
        path: 'sfc',
        name: 'Sfc',
        meta: { title: '单页面组件' },
        component: () => import('/@/pages/SFC/index.vue'),
      },
      {
        path: 'test',
        name: 'Test',
        meta: { title: '测试' },
        component: import('/@/pages/test/index')
      }
    ]
  },
  {
    // 登录页
    path: '/login',
    name: 'Login',
    // component: import('../pages/User/Login.vue'),
    component: import('../pages/User/Login/index'),
  }
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