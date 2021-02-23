<template>
  <p class="account-window-title">账号注册</p>
  <a-input
    type="text"
    v-model="formData.username"
    class="input-line"
    placeholder="请输入帐号"
    :allowClear="true"
  >
    <template #prefix>
      <UserOutlined class="label-icon" />
    </template>
  </a-input>
	<a-input
    type="text"
    v-model="formData.nickname"
    class="input-line"
    placeholder="请输入用户名"
    :allowClear="true"
  >
		<template #prefix>
      <SmileOutlined class="label-icon" />
    </template>
	</a-input>
  <a-input
    type="password"
    v-model="formData.password"
    class="input-line"
    placeholder="请输入密码"
    :allowClear="true"
  >
    <template #prefix>
      <KeyOutlined class="label-icon" />
    </template>
  </a-input>
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
  <a-button class="submit-button" type="primary" size="large">注册</a-button>
  <div class="others flex">
    <RouterLink to="/account/login" replace>返回登录</RouterLink>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive } from "vue";
import { useStore } from "vuex";
import { Input, Button } from "ant-design-vue";
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

    return { formData };
  },
});
</script>

<style lang='less'>
@import "./index.module.less";
</style>