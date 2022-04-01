<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs stretch type="border-card" class="demo-tabs">
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <span>账号登录</span>
          </span>
        </template>
        <account-login ref="accountRef"></account-login>
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><calendar /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <phone-login></phone-login>
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="iskeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>

    <el-button type="primary" class="login-btn" @click="handleLogin"
      >立即登陆</el-button
    >
  </div>
</template>

<script lang="ts">
import { Calendar } from '@element-plus/icons-vue';
import { defineComponent, ref } from 'vue';
import AccountLogin from './account-login.vue';
import PhoneLogin from './phone-login.vue';
export default defineComponent({
  components: {
    Calendar,
    AccountLogin,
    PhoneLogin
  },
  setup() {
    const iskeepPassword = ref(false);
    const accountRef = ref<InstanceType<typeof AccountLogin>>();
    const handleLogin = () => {
      // console.log(accountRef.value);
      accountRef.value?.loginAction(iskeepPassword.value);
    };
    return {
      iskeepPassword,
      handleLogin,
      accountRef
    };
  }
});
</script>

<style scoped lang="less">
.login-panel {
  width: 320px;
  margin-bottom: 120px;
  .title {
    text-align: center;
  }
}
.account-control {
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
}
.login-btn {
  width: 100%;
  margin-top: 10px;
}
</style>
