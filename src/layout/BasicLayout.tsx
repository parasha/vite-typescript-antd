import { defineComponent } from 'vue';
import { RouterView, onBeforeRouteUpdate, RouteLocationNormalized } from 'vue-router';
import store from '@/store/index';
import PageSider from './PageSider';
import { Layout, Button } from 'ant-design-vue';

// 登录校验
const checkLogin = async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: Function) => {
  const userinfo = await store.dispatch('getUserInfo');
  if (userinfo) {
    next()
  } else {
    next('/login');
  }
}

export default defineComponent({
  // 登陆校验
  beforeRouteEnter: checkLogin,
  setup() {
    // 登录校验
    onBeforeRouteUpdate(checkLogin);

    console.log('base layout mount');

    return () => (
      <Layout>
        <PageSider />
        <Layout>
          {/* 页面顶部登陆 */}
          <Layout.Header>
            <span class='username'>
              {store.state.userInfo ? store.state.userInfo.username : '未登录'}
            </span>
            <Button
              size='small'
              style={{ borderRadius: '4px', marginLeft: '10px' }}
              onClick={() => { store.dispatch('logout') }}
            >
              退出
            </Button>
          </Layout.Header>
          <div id="app-main-window">
            <RouterView />
          </div>
        </Layout>
      </Layout>
    )
  }
})