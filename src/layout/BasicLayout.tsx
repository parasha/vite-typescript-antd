import { defineComponent } from 'vue';
import { RouterView, onBeforeRouteUpdate, RouteLocationNormalized } from 'vue-router';
import store from '/@/store/index';
import PageSider from './PageSider';
import { Layout, Button } from 'ant-design-vue';

const checkLogin = async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: Function) => {
  const userinfo = await store.dispatch('getUserInfo');
  if (userinfo) {
    next()
  } else {
    next('/login');
  }
}

export default defineComponent({
  beforeRouteEnter: checkLogin,
  setup() {

    onBeforeRouteUpdate(checkLogin);

    return () => (
      <Layout>
        <PageSider />
        <Layout>
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