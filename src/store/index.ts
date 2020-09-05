import { createStore } from 'vuex';

type Response = { code: number, data?: any, msg?: string };
// mock
function getUserInfo(): Promise<Response> {
  return new Promise(res => {
    setTimeout(() => {
      res({ code: 0, data: { userid: 1, name: 'parasha' } })
    }, 500)
  })
}

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
    async login(context) {
      console.log('login context:', context);
      const res = await getUserInfo();
      if (res.code === 0) {
        context.commit('changeUserInfo', res.data);
      } else {
        context.commit('changeUserInfo', null);
      }
    }
  }
})