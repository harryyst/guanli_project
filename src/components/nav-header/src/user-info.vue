<template>
  <div class="user-info">
    <el-dropdown>
      <span class="el-dropdown-link">
        {{ username }}<el-icon class="el-icon--right"></el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>Action 1</el-dropdown-item>
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

export default defineComponent({
  props: {
    username: {
      type: String
    }
  },
  setup() {
    return {};
  }
});
</script>

<style scoped></style>
