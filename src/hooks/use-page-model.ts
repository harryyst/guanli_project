import { ref } from 'vue';
import PageModel from '@/components/page-model';
type CallbackType = (item?: any) => void;
export function usePageModel(newCb?: CallbackType, editCb?: CallbackType) {
  const defaultInfo = ref({});
  const pageModelRef = ref<InstanceType<typeof PageModel>>();

  const handleNewData = () => {
    defaultInfo.value = {};
    if (pageModelRef.value) {
      pageModelRef.value.centerDialogVisible = true;
    }
    newCb && newCb();
  };
  const handleEditData = (item: any) => {
    defaultInfo.value = { ...item };
    if (pageModelRef.value) {
      pageModelRef.value.centerDialogVisible = true;
    }
    editCb && editCb(item);
  };
  return [handleNewData, handleEditData, defaultInfo, pageModelRef];
}
