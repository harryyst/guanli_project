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
        <account-login></account-login>
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
  </div>
</template>

<script lang="ts">
import { Calendar } from '@element-plus/icons-vue';
import { defineComponent } from 'vue';
import AccountLogin from './account-login.vue';
import PhoneLogin from './phone-login.vue';
export default defineComponent({
  components: {
    Calendar,
    AccountLogin,
    PhoneLogin
  },
  setup() {
    return {};
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
</style>
