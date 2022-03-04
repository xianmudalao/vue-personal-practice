<template>
  <div class="login-container">
    <div class="full">
      <img class="login-bgc" alt="首页" src="../../assets/svg/login-bg.svg" />
    </div>
    <div class="form">
      <SvgIcon name="moon" />

      <a-form
        :model="formState"
        name="normal_login"
        class="login-form"
        @finish="onFinish"
        @finish-failed="onFinishFailed"
      >
        <a-form-item
          label="Username"
          name="username"
          :rules="[{ required: true, message: 'Please input your username!' }]"
        >
          <a-input v-model:value="formState.username">
            <template #prefix>
              <UserOutlined class="site-form-item-icon" />
            </template>
          </a-input>
        </a-form-item>

        <a-form-item
          label="Password"
          name="password"
          :rules="[{ required: true, message: 'Please input your password!' }]"
        >
          <a-input-password v-model:value="formState.password">
            <template #prefix>
              <LockOutlined class="site-form-item-icon" />
            </template>
          </a-input-password>
        </a-form-item>

        <div class="login-form-wrap">
          <a-form-item name="remember" no-style>
            <a-checkbox v-model:checked="formState.remember"
              >Remember me</a-checkbox
            >
          </a-form-item>
          <a class="login-form-forgot">Forgot password</a>
        </div>

        <a-form-item>
          <a-button
            :disabled="disabled"
            type="primary"
            html-type="submit"
            class="login-form-button"
            >Log in</a-button
          >Or
          <a>register now!</a>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script lang="ts">
import SvgIcon from "@/components/Svg/SvgIcon.vue";
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import { defineComponent, computed, reactive, toRefs } from "vue";

interface FormState {
  username: string;
  password: string;
  remember: boolean;
}
export default defineComponent({
  components: { SvgIcon, UserOutlined, LockOutlined },
  setup() {
    const formState = reactive<FormState>({
      username: "",
      password: "",
      remember: true,
    });

    const onFinish = (values: any) => {
      console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo: any) => {
      console.log("Failed:", errorInfo);
    };
    const disabled = computed(() => {
      return !(formState.username && formState.password);
    });
    return {
      formState,
      onFinish,
      onFinishFailed,
      disabled,
    };
  },
});
</script>

<style scoped lang="scss">
.login-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  .full {
    width: 100%;
    height: 100%;
    position: relative;
    .login-bgc {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      object-fit: cover;
      z-index: -1;
    }
  }
  .form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
}
</style>
