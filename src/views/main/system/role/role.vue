<template>
  <div class="role">
    <page-content
      :contentTableConfig="contentTableConfig"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
      pageName="role"
    ></page-content>
    <page-model
      :modalConfig="modalConfig"
      pageName="role"
      ref="pageModelRef"
      :defaultInfo="defaultInfo"
      :otherInfo="otherInfo"
    >
      <el-tree
        ref="elTreeRef"
        :data="menus"
        show-checkbox
        node-key="id"
        :props="{ children: 'children', label: 'name' }"
        @check="handleCheckChange"
      />
    </page-model>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, nextTick } from 'vue';
import { useStore } from 'vuex';
import { contentTableConfig } from './config/content.config';
import PageContent from '@/components/page-content';
import PageModel from '@/components/page-model';
import { modalConfig } from './config/model.config';
import { usePageModel } from '@/hooks/use-page-model';
import { getMenuLeafKeys } from '@/utils/map-menus';
import { ElTree } from 'element-plus';
export default defineComponent({
  components: {
    PageContent,
    PageModel
  },
  name: 'role',
  setup() {
    const store = useStore();
    const elTreeRef = ref<InstanceType<typeof ElTree>>();
    const editCallback = (item: any) => {
      const leafKeys = getMenuLeafKeys(item.menuList);
      nextTick(() => {
        console.log(elTreeRef.value);

        elTreeRef.value?.setCheckedKeys(leafKeys, false);
      });
    };
    const [handleNewData, handleEditData, defaultInfo, pageModelRef] =
      usePageModel(undefined, editCallback);
    const menus = computed(() => store.state.entireMenu);
    const otherInfo = ref({});
    const handleCheckChange = (data1: any, data2: any) => {
      const checkedKeys = data2.checkedKeys;
      const halfCheckedKeys = data2.halfCheckedKeys;
      const menuList = [...checkedKeys, ...halfCheckedKeys];
      otherInfo.value = { menuList };
      console.log(otherInfo.value);
    };
    return {
      contentTableConfig,
      modalConfig,
      pageModelRef,
      defaultInfo,
      handleNewData,
      handleEditData,
      menus,
      handleCheckChange,
      otherInfo,
      elTreeRef
    };
  }
});
</script>

<style scoped></style>
