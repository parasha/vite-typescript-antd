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
        meta: {title: '首页'},
        component: import('/@/pages/Home')
      },
      {
        path: 'chart',
        name: 'Chart',
        meta: {title: '图表'},
        component: () => import('/@/pages/Chart'),
      },
    ]
  },
  {
    // 登录页
    path: '/login',
    name: 'Login',
    component: import('/@/pages/login/index'),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next)=>{
  store.commit('changeSiderMenu', to.name)
  next();
})
export default router;