import { createApp, defineComponent } from 'vue';
import {RouterView} from 'vue-router';

import router from './routes/index';
import store from './store/index';

import '@/common/less/reset.less';
import '@/common/less/common.less';
import 'ant-design-vue/dist/antd.css';

import { install } from './plugins/test';

// console.log('环境：', ENV);

// 后退时刷新页面
window.addEventListener('pageshow', (e) => {
  if (e.persisted) {
    location.reload();
  }
});

const App = defineComponent({
  name: 'App',
  setup(){
    return () => (
      <RouterView />
    )
  }
})

const app = createApp(App).use(store).use(router).use(install, 'test plugin options')
console.log('app: ', app);
app.mount('#app');