<template>
  <div class="user-info">
    <el-dropdown>
      <span class="el-dropdown-link">
        {{ username }}<el-icon class="el-icon--right"></el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="handleExitClick">退出登录</el-dropdown-item>
          <el-dropdown-item> Action 2 </el-dropdown-item>
          <el-dropdown-item>Action 3</el-dropdown-item>
          <el-dropdown-item>Action 4</el-dropdown-item>
          <el-dropdown-item>Action 5</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import localCache from '@/utils/cache';
import { useRouter } from 'vue-router';
export default defineComponent({
  props: {
    username: {
      type: String
    }
  },
  setup() {
    const router = useRouter();
    const handleExitClick = () => {
      localCache.deleteCache('token');
      router.push('/main');
    };
    return {
      handleExitClick
    };
  }
});
</script>

<style scoped></style>
