<template>
  <div class="account-login">
    <el-form :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password" showpassword>
        <el-input v-model="account.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import type { FormInstance, ElForm } from 'element-plus';
import { rules } from '../config/account-config';
export default defineComponent({
  setup() {
    const formRef = ref<InstanceType<typeof ElForm>>();
    const account = reactive({
      name: '',
      password: ''
    });
    const loginAction = (iskeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          console.log('login');
        }
      });
    };
    return {
      account,
      rules,
      loginAction,
      formRef
    };
  }
});
</script>

<style scoped></style>
