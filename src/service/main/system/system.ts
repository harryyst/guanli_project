import stRequest from '@/service';

export function getPageListData(url: string, queryInfo: any) {
  return stRequest.post({
    url: url,
    data: queryInfo
  });
}

export function deletePageData(url: string) {
  return stRequest.delete({
    url: url
  });
}

export function createPageData(url: string, newData: any) {
  return stRequest.post({
    url: url,
    data: newData
  });
}

export function editPageData(url: string, newData: any) {
  return stRequest.patch({
    url: url,
    data: newData
  });
}
