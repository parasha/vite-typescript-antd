<template>
  <div id="login" class="flex">
    <div class="login-form flex">
      <p class="login-page-title">
        <img :src="Logo" />
        vite + ant design vue
      </p>
      <div class="input-line">
        <div class="input-label">用户名：</div>
        <a-input
          type="text"
          placeholder="请输入用户名"
          v-model:value="userinfo.username"
        />
      </div>
      <div class="input-line">
        <div class="input-label">密码：</div>
        <a-input
          type="password"
          placeholder="请输入密码"
          v-model:value="userinfo.password"
        />
      </div>
      <a-button size="large" type="primary" @Click="submit">登录</a-button>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import { useStore } from 'vuex';
import Logo from "/@/assets/logo.png";

export default {
  setup() {
    const userinfo = reactive({
      username: "admin",
      password: "admin",
    });
    const store = useStore();

    const submit = () => {
      console.log(userinfo);
      store.dispatch("login", userinfo);
    };

    return { Logo, userinfo, submit };
  },
};
</script>

<style lang="less" scoped>
#login {
  background: url("/@/assets/login-bg.png") no-repeat center center;
  background-size: 100% 100%;
  height: 100vh;
  flex-direction: column;
  justify-content: center;

  .login-form {
    width: 80vw;
    background-color: #ffffff;
    border-radius: 8px;
    padding: 20px;
    flex-direction: column;
    justify-content: center;

    .login-page-title {
      text-align: center;
      font-size: 30px;
      margin-bottom: 30px;
      color: rgb(1, 143, 251);

      img {
        height: 50px;
        margin-right: 20px;
      }
    }
  }

  .input-line {
    width: 80%;
    margin-bottom: 20px;
    display: flex;
    align-items: center;

    .input-label {
      font-size: 17px;
      width: 90px;
      font-weight: bold;
      flex-shrink: 0;
    }
  }

  .ant-btn {
    margin-top: 50px;
    width: 45%;
  }
}
</style>
