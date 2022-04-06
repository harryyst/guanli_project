<template>
  <div class="nav-header">
    <el-icon class="fold-menu" @click="handleFoldChange">
      <template v-if="isFold">
        <Fold />
      </template>
      <template v-else>
        <Expand />
      </template>
    </el-icon>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Fold, Expand } from '@element-plus/icons-vue';

export default defineComponent({
  emits: ['foldChange'],
  components: {
    Fold,
    Expand
  },
  setup(props, { emit }) {
    const isFold = ref(false);
    const handleFoldChange = () => {
      isFold.value = !isFold.value;
      emit('foldChange', isFold.value);
    };
    return {
      isFold,
      handleFoldChange
    };
  }
});
</script>

<style scoped>
.fold-menu {
  font-size: 30px;
  cursor: pointer;
}
.nav-header {
  padding-top: 10px;
}
</style>
