<template>
  <p class="account-window-title">账号注册</p>
  <a-form :model="formData">
    <a-form-item>
      <a-input
        type="text"
        v-model:value="formData.username"
        class="input-line"
        placeholder="请输入帐号"
        :allowClear="true"
      >
        <template #prefix>
          <UserOutlined class="label-icon" />
        </template>
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input
        type="text"
        v-model:value="formData.nickname"
        class="input-line"
        placeholder="请输入用户名"
        :allowClear="true"
      >
        <template #prefix>
          <SmileOutlined class="label-icon" />
        </template>
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input
        type="password"
        v-model:value="formData.password"
        class="input-line"
        placeholder="请输入密码"
        :allowClear="true"
      >
        <template #prefix>
          <KeyOutlined class="label-icon" />
        </template>
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input
        type="password"
        v-model="formData.checkPassword"
        class="input-line"
        placeholder="请再次输入密码"
        :allowClear="true"
      >
        <template #prefix>
          <KeyOutlined class="label-icon" />
        </template>
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-button class="submit-button" type="primary" size="large" @click='register'
        >注册</a-button
      >
    </a-form-item>
  </a-form>
  <div class="others flex">
    <RouterLink to="/account/login" replace>返回登录</RouterLink>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive } from "vue";
import { useStore } from "vuex";
import { Input, Button, Form } from "ant-design-vue";
import {
  UserOutlined,
  KeyOutlined,
  SmileOutlined,
} from "@ant-design/icons-vue";

export default defineComponent({
  name: "register",
  components: {
    [Input.name]: Input,
    [Button.name]: Button,
    [Form.name]: Form,
    [Form.Item.name]: Form.Item,
    UserOutlined,
    KeyOutlined,
    SmileOutlined,
  },
  setup(props, context) {
    const formData = reactive({
      username: "",
      password: "",
      checkPassword: "",
      nickname: "",
    });

    const store = useStore();

    function checkBeforeFetchRegister (){
      console.log('校验：', formData);
      return true;
    }

    function register () {
      if(checkBeforeFetchRegister()){
        store.dispatch('login', {
          username: formData.username,
          password: formData.password,
        })
      }else{
        // 报错
      }
    }

    return { formData, register };
  },
});
</script>

<style lang='less' scoped>
@import "./index.module.less";

.input-line {
  width: 320px;
  margin-bottom: 0;
}

.submit-button{
  width: 162px;
}

.ant-form-item{
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>