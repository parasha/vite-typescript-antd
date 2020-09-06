import { createApp } from 'vue'
import router from './routers/index';
import store from './store/index';
import App from '/@/App';
// import '/@/common/less/reset.less';
import '/@/common/less/common.less';
import 'ant-design-vue/dist/antd.css';

console.log('环境：', process.env.NODE_ENV);

createApp(App).use(store).use(router).mount('#app')