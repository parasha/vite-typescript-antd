export default {
    path: '/account',
    component: () => import('@/pages/account/index'),
    children: [
        {
            path: 'login',
            name: 'login',
            component: () => import('@/pages/account/login/index')
        }
    ]
}