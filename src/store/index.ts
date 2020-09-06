import { createStore } from 'vuex';
import { getUserInfo } from '/@/api/login';

export default createStore({
  modules: {},
  state: {
    loading: false,
    userInfo: null,
  },
  mutations: {
    changeUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    }
  },
  actions: {
    async getUserInfo(context) {
      const res = await getUserInfo();
      if (res.code === 0) {
        context.commit('changeUserInfo', res.data);
        return res.data
      } else {
        context.commit('changeUserInfo', null);
        return null;
      }
    }
  }
})