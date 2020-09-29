import { defineComponent, reactive } from 'vue';
import { useStore } from 'vuex';
import { Input, Button } from 'ant-design-vue';
import style from './index.module.less';
import Logo from '/@/assets/logo.png'

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
      <div id={style.login}>
        <p class='login-page-title'>
          <img src={Logo} />
            vite + ant design vue
          </p>
        <div class="input-line">
          <div class="input-label">用户名：</div>
          <Input type="text" placeholder='请输入用户名' value={state.username} onChange={e => { state.username = e.target.value; }} />
        </div>
        <div class="input-line">
          <div class="input-label">密码：</div>
          <Input type="password" placeholder='请输入密码' value={state.password} onChange={e => { state.password = e.target.value; }} />
        </div>
        <Button size='large' onClick={submit}>提交</Button>
      </div>
    )
  }
})