<template>
  <div class="page-model">
    <el-dialog
      v-model="centerDialogVisible"
      title="Warning"
      width="30%"
      center
      destroy-on-close
    >
      <st-form v-bind="modalConfig" v-model="formData"></st-form>
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="centerDialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="handleConfirmClick"
            >Confirm</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { useStore } from 'vuex';
import StForm from '@/base-ui/form';
export default defineComponent({
  components: {
    StForm
  },
  props: {
    modalConfig: {
      type: Object
    },
    defaultInfo: {
      type: Object,
      default: () => ({})
    },
    pageName: {
      type: String
    },
    otherInfo: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const centerDialogVisible = ref(false);
    const formData = ref<any>({});
    watch(
      () => props.defaultInfo,
      (newValue) => {
        for (const item of props.modalConfig?.formItems) {
          formData.value[`${item.field}`] = newValue[`${item.field}`];
        }
      }
    );
    const store = useStore();

    const handleConfirmClick = () => {
      centerDialogVisible.value = false;
      console.log(props.otherInfo);
      if (Object.keys(props.defaultInfo).length) {
        store.dispatch('system/editPageDataAction', {
          pageName: props.pageName,
          editData: { ...formData.value, ...props.otherInfo },
          id: props.defaultInfo.id
        });
      } else {
        store.dispatch('system/createPageDataAction', {
          pageName: props.pageName,
          newData: { ...formData.value, ...props.otherInfo }
        });
      }
    };

    return { centerDialogVisible, formData, handleConfirmClick };
  }
});
</script>

<style scoped></style>
