import { ref } from 'vue';
import PageContent from '@/components/page-content';
export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof PageContent>>();
  const searchBtnClick = (queryInfo: any) => {
    if (pageContentRef.value) {
      // console.log(pageContentRef.value?.pageInfo);
    }
    pageContentRef.value;
  };

  return [pageContentRef, searchBtnClick];
}
