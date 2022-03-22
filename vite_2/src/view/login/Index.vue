<template>
  <div class="login-container">
    <div class="full">
      <img class="login-bgc" alt="首页" src="../../assets/svg/login-bg.svg" />
    </div>
    <div class="form">
      <SvgIcon name="moon" />
      <div class="form-user">
        <el-form class="loginForm" :model="loginForm" label-position="left" autocomplete="on">
          <el-form-item prop="userName">
            <User style="width: 1em; height: 1em; margin-right: 8px" />
            <el-input v-model="loginForm.userName" type="text" tabindex="1" autocomplete="on"></el-input>
          </el-form-item>
          <el-form-item prop="userPassword">
            <Lock style="width: 1em; height: 1em; margin-right: 8px" />
            <el-input v-model="loginForm.userPassword" type="text" tabindex="2" autocomplete="on"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="showPop('open')">弹窗</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import SvgIcon from "@/components/Svg/SvgIcon.vue";

interface FormState {
  userName: string;
  userPassword: string;
}
type PopStatus = (state: string) => void;
export default defineComponent({
  components: { SvgIcon },
  setup() {
    const loginForm = reactive<FormState>({
      userName: "",
      userPassword: "",
    });
    const showPop: PopStatus = () => {
      console.log('123')
    };
    return {
      loginForm,
      showPop,
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
    &-user {
      padding: 24px;
      background-color: #fff;
      border-radius: 4px;
    }
  }
}
</style>
