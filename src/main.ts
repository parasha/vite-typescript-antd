import { createApp } from 'vue'
import router from './routers/index';
import store from './store/index';
import App from '/@/App';
// import '/@/common/less/reset.less';
import '/@/common/less/common.less';
import 'ant-design-vue/dist/antd.css';

import { install } from './plugins/test';

console.log('环境：', ENV);

const app = createApp(App).use(store).use(router).use(install, 'test plugin options')
console.log('app: ', app);
app.mount('#app');