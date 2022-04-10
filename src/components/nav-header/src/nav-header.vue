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
    <div class="header-info">
      <st-breadcrumb :breadcrumbs="breadcrumbs"/>
      <user-info :username="username" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { Fold, Expand } from '@element-plus/icons-vue';
import { useStore } from 'vuex';
import userInfo from './user-info.vue';
import{useRoute }from'vue-router'
import StBreadcrumb from '../../../base-ui/breadcrumb';
import {IBreadcrumb} from '@/base-ui/breadcrumb/types'
import{pathMapBreadcrumbs} from '@/utils/map-menus'
export default defineComponent({
  emits: ['foldChange'],
  components: {
    Fold,
    Expand,
    userInfo,
    StBreadcrumb
  },
  setup(props, { emit }) {
    const isFold = ref(false);
    const store = useStore();
    const username = computed(() => store.state.login.userInfo.name);
   
    const handleFoldChange = () => {
      isFold.value = !isFold.value;
      emit('foldChange', isFold.value);
    };

    const breadcrumbs=computed(() =>{
      const userMenus = store.state.login.userMenus;
      const route = useRoute();
      const currentPath = route.path;
      return pathMapBreadcrumbs(userMenus,currentPath)});
    return {
      isFold,
      handleFoldChange,
      username,
      breadcrumbs
    };
  }
});
</script>

<style lang="less" scoped>
.fold-menu {
  font-size: 30px;
  cursor: pointer;
}
.nav-header {
  padding-top: 10px;
  display: flex;
  flex-direction: row;
}

.header-info {
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
}
</style>
