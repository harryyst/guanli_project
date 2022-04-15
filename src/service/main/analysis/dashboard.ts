import stRequest from '../../index';

enum DashboardAPI {
  categoryGoodsCount = '/goods/category/count',
  categoryGoodsSale = '/goods/category/sale',
  categoryGoodsFavor = '/goods/category/favor',
  addressGoodsSale = '/goods/address/sale'
}

export function getCategoryGoodsCount() {
  return stRequest.get({
    url: DashboardAPI.categoryGoodsCount
  });
}
export function getAddressGoodsSale() {
  return stRequest.get({
    url: DashboardAPI.addressGoodsSale
  });
}
export function getCategoryGoodsSale() {
  return stRequest.get({
    url: DashboardAPI.categoryGoodsSale
  });
}
export function getCategoryGoodsFavor() {
  return stRequest.get({
    url: DashboardAPI.categoryGoodsFavor
  });
}
