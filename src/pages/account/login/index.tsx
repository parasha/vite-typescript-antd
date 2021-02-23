import { defineComponent, reactive } from 'vue';
import { useStore } from 'vuex';
import { RouterLink } from 'vue-router';
import { UserOutlined, KeyOutlined } from '@ant-design/icons-vue';
import { Input, Button } from 'ant-design-vue';
import style from '../index.module.less';

export default defineComponent({
  setup() {
    const state = reactive({
      username: '',
      password: ''
    })
    const store = useStore();

    const submit = () => {
      store.dispatch('login', state)
    }

    return () => (
      <>
        <p class={style['account-window-title']}>
          账号登录
          </p>
        <Input
          type="text"
          placeholder="请输入用户名(随便写)"
          value={state.username}
          onChange={(e) => { state.username = e.target.value }}
          class={style['input-line']}
          allowClear={true}
        >
          {{ prefix: () => <UserOutlined class='label-icon' /> }}
        </Input>
        <Input
          type="password"
          placeholder="请输入密码(随便写)"
          value={state.password}
          onChange={(e) => { state.password = e.target.value }}
          class={style['input-line']}
          allowClear={true}
        >
          {{ prefix: () => <KeyOutlined class='label-icon' /> }}
        </Input>
        <Button size="large" type="primary" onClick={submit} class={style['submit-button']}>登录</Button>
        <div class={style.others + ' flex'}>
          <RouterLink to='/register' class={style['link-button']}>账号注册</RouterLink>
          <RouterLink to='/reset-password' class={style['link-button']}>忘记密码</RouterLink>
        </div>
      </>
    )
  }
})