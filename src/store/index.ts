import { createStore } from 'vuex';
import router from '@/routes/index';
import { getQuery } from '@/common/js/getQuery';
import { getUserInfo } from '@/api/login';

export function toLogin() {
  const url: string = location.href.slice(location.origin.length);
  router.replace(`/account/login?redirect=${encodeURI(url)}`)
}

const store = createStore({
  modules: {},
  state: {
    loading: false,
    userInfo: null,
    siderKey: [''],
  },
  mutations: {
    changeUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    },
    changeSiderMenu(state, siderKey: string) {
      state.siderKey = [siderKey];
    }
  },
  actions: {
    // 登录
    async login(context, payload: { username: string, password: string }) {
      const redirect = getQuery().redirect || '/'
      router.replace(redirect)
    },
    // 检查登录状态
    async getUserInfo(context) {
      const res = await getUserInfo();
      if (res.code === 0) {
        context.commit('changeUserInfo', res.data);
        return res.data
      } else {
        context.commit('changeUserInfo', null);
        return null;
      }
    },
    // 退出
    logout(context) {
      // 删除 token
      context.commit('changeUserInfo', null);
      toLogin();
    }
  }
})

export default store;