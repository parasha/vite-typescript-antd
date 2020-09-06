import { defineComponent } from 'vue';
import { RouterView, onBeforeRouteUpdate, RouteLocationNormalized } from 'vue-router';
import store from '/@/store/index';
import PageSider from './PageSider';
import { Layout } from 'ant-design-vue';

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

    onBeforeRouteUpdate(checkLogin)

    return () => (
      <Layout>
        <PageSider />

        {/* < RouterView /> */}
      </Layout>

    )
  }
})