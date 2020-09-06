import { defineComponent, reactive } from 'vue';
import { Layout, Menu } from 'ant-design-vue';
import Logo from '/@/assets/logo.png';
import style from './less/basicLayout.module.less';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue';

const { Sider } = Layout;
export default defineComponent({

  setup() {
    const state = reactive({
      collapsed: false,
      selectedKeys: ['1']
    })

    return () => (
      <Sider collapsed={state.collapsed} trigger={null} collapsible>
        <div class={style.header}>
          <img src={Logo}/>
          Vite + AntD
        </div>
        <Menu theme="dark" mode="inline" selectedKeys=
          {state.selectedKeys}>
          <Menu.Item key="1">
            <UserOutlined />
            <span>nav 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <VideoCameraOutlined />
            <span>nav 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <UploadOutlined />
            <span>nav 3</span>
          </Menu.Item>
        </Menu>
      </Sider>
    )
  }
})