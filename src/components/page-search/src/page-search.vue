<template>
  <div class="page-search">
    <st-form v-bind="formConfig" v-model="formData">
      <template #footer>
        <el-button type="primary" @click="handleResetClick">重制</el-button>
        <el-button type="primary" @click="handleSearch">搜索</el-button>
      </template>
    </st-form>
  </div>
  <div class="content"></div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import StForm from '@/base-ui/form/index';

export default defineComponent({
  props: {
    formConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    StForm
  },
  emits: ['searchBtnClick'],
  setup(props, { emit }) {
    const formItems = props.formConfig?.formItems ?? [];
    const formOriginData: any = {};
    for (const item of formItems) {
      formOriginData[item.field] = '';
    }

    const formData = ref(formOriginData);

    const handleResetClick = () => {
      for (const key in formOriginData) {
        formData.value[`${key}`] = formOriginData[key];
      }
    };
    const handleSearch = () => {
      emit('searchBtnClick', formData.value);
    };
    return { formData, handleResetClick, handleSearch };
  }
});
</script>

<style scoped></style>
