import IRootState from '@/store/login/type';
import { Module } from 'vuex';
import { IDashboardState } from './types';
import {
  getCategoryGoodsCount,
  getAddressGoodsSale,
  getCategoryGoodsSale,
  getCategoryGoodsFavor
} from '@/service/main/analysis/dashboard';
const dashboardModule: Module<IDashboardState, IRootState> = {
  namespaced: true,
  state() {
    return {
      categoryGoodsCount: [],
      categoryGoodsSale: [],
      categoryGoodsFavor: [],
      addressGoodsSale: []
    };
  },
  mutations: {
    changeCategoryGoodsCount(state, list) {
      state.categoryGoodsCount = list;
    },
    changeCategoryGoodsSale(state, list) {
      state.categoryGoodsSale = list;
    },
    changeCategoryGoodsFavor(state, list) {
      state.categoryGoodsFavor = list;
    },
    changeAddressGoodsSale(state, list) {
      state.addressGoodsSale = list;
    }
  },
  actions: {
    async getDashboardDataAction({ commit }) {
      const categoryCountResult = await getCategoryGoodsCount();
      commit('changeCategoryGoodsCount', categoryCountResult.data);
      const categorySaleResult = await getCategoryGoodsSale();
      commit('changeCategoryGoodsSale', categorySaleResult.data);
      const categoryGoodsFavor = await getCategoryGoodsFavor();
      commit('changeCategoryGoodsFavor', categoryGoodsFavor.data);
      const addressGoodsSale = await getAddressGoodsSale();
      commit('changeAddressGoodsSale', addressGoodsSale.data);
    }
  }
};

export default dashboardModule;
