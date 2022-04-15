<template>
  <div class="user">
    <page-search :formConfig="formConfig" @searchBtnClick="searchBtnClick" />

    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="users"
      ref="pageContentRef"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    ></page-content>
    <page-model
      :defaultInfo="defaultInfo"
      ref="pageModelRef"
      :modalConfig="modelConfigRef"
      :pageName="pageName"
    ></page-model>
    <!-- <page-test ref="test"></page-test> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import { formConfig } from './config/search.config';
import { contentTableConfig } from './config/content.config';
import { modalConfig } from './config/model.config';
import StForm from '@/base-ui/form';
import PageSearch from '@/components/page-search';
import PageContent from '@/components/page-content';
import PageModel from '@/components/page-model';
import PageTest from '@/components/page-test';
import { usePageSearch } from '@/hooks/usePageSearch';
import { usePageModel } from '@/hooks/use-page-model';
import { useStore } from 'vuex';
export default defineComponent({
  components: {
    PageSearch,
    PageContent,
    StForm,
    PageModel,
    PageTest
  },
  name: 'user',
  setup() {
    const store = useStore();
    const test = ref<InstanceType<typeof PageTest>>();
    // const [pageContentRef, searchBtnClick] = usePageSearch();
    const pageName = 'users';
    const newCallback = () => {
      const passwordItem = modalConfig.formItems.find(
        (item) => item.field === 'password'
      );
      passwordItem!.isHidden = false;
    };
    const editCallback = () => {
      const passwordItem = modalConfig.formItems.find(
        (item) => item.field === 'password'
      );
      passwordItem!.isHidden = true;
    };

    const modelConfigRef = computed(() => {
      const departmentItem = modalConfig.formItems.find(
        (item) => item.field === 'departmentId'
      );
      departmentItem!.options = store.state.entireDepartment.map(
        (item: any) => {
          return { title: item.name, value: item.id };
        }
      );
      const roleItem = modalConfig.formItems.find(
        (item) => item.field === 'roleId'
      );
      roleItem!.options = store.state.entireRole.map((item: any) => {
        return { title: item.name, value: item.id };
      });
      return modalConfig;
    });

    const [handleNewData, handleEditData, defaultInfo, pageModelRef] =
      usePageModel(newCallback, editCallback);

    const pageContentRef = ref<InstanceType<typeof PageContent>>();
    const searchBtnClick = (queryInfo: any) => {
      // console.log(pageContentRef.value);
      if (pageContentRef.value) {
        pageContentRef.value?.getPageData(queryInfo);
      }
    };

    return {
      formConfig,
      contentTableConfig,
      pageName,
      searchBtnClick,
      pageContentRef,
      modelConfigRef,
      handleNewData,
      handleEditData,
      pageModelRef,
      defaultInfo
    };
  }
});
</script>

<style scoped></style>
