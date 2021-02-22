import { defineComponent, reactive } from 'vue';
import { RouteRecordRaw, RouterLink } from 'vue-router';
import { Layout, Menu } from 'ant-design-vue';
import Logo from '@/assets/logo.png';
import style from './less/basicLayout.module.less';
import { routes } from '@/routers/index';
import store from '@/store/index';

const menuList = (list: RouteRecordRaw[], basePath = '/') => list.map(item => {
  const { children, meta = {} } = item;
  if (meta.hide) {
    return
  }
  if (children) {
    console.log(basePath);
    return (
      <Menu.SubMenu title={meta.title}>
        {menuList(children, basePath + item.path + '/')}
      </Menu.SubMenu>
    )
  } else {
    return (
      <Menu.Item key={item.name as string}>
        <RouterLink to={basePath + item.path}>{meta.title}</RouterLink>
      </Menu.Item>
    )
  }
})


export default defineComponent({

  setup() {
    const state = reactive({
      openKeys: []
    });

    return () => (
      <Layout.Sider trigger={null}>
        <div class={style.header}>
          <img src={Logo} />
          Vite + AntD
        </div>
        <Menu theme="dark" mode="inline" selectedKeys={store.state.siderKey}>
          {menuList(routes[0].children || [])}
        </Menu>
      </Layout.Sider>
    )
  }
})