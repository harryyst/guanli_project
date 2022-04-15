import IRootState from '@/store/login/type';
import { Module } from 'vuex';
import { ISystemState } from './type';

import {
  deletePageData,
  getPageListData,
  createPageData,
  editPageData
} from '@/service/main/system/system';

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0,
      roleList: [],
      roleCount: 0,
      goodList: [],
      goodCount: 0,
      menuList: [],
      menuCount: 0
    };
  },
  mutations: {
    changeUserList(state, userList: any) {
      state.userList = userList;
    },
    changeUserCount(state, userCount: number) {
      state.userCount = userCount;
    },
    changeRoleList(state, roleList: any) {
      state.roleList = roleList;
    },
    changeRoleCount(state, roleCount: number) {
      state.roleCount = roleCount;
    },
    changeGoodList(state, goodList: any) {
      state.goodList = goodList;
    },
    changeGoodCount(state, goodCount: number) {
      state.goodCount = goodCount;
    },
    changeMenuList(state, menuList: any) {
      state.menuList = menuList;
    },
    changeMenuCount(state, menuCount: number) {
      state.menuCount = menuCount;
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        switch (pageName) {
          case 'users':
            return state.userList;
          case 'role':
            return state.roleList;
          case 'goods':
            return state.goodList;
          case 'menu':
            return state.menuList;
        }
      };
    },
    pageListCount(state) {
      return (pageName: string) => {
        switch (pageName) {
          case 'users':
            return state.userCount;
          case 'role':
            return state.roleCount;
          case 'goods':
            return state.goodCount;
          case 'menu':
            return state.menuCount;
        }
      };
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      const pageName = payload.pageName;
      let pageUrl = '';
      switch (pageName) {
        case 'users':
          pageUrl = 'users/list';
          break;
        case 'role':
          pageUrl = 'role/list';
          break;
        case 'goods':
          pageUrl = 'goods/list';
          break;
        case 'menu':
          pageUrl = 'menu/list';
      }
      // const pageUrl = `${pageName}/list`;
      const pageResult = await getPageListData(pageUrl, payload.queryInfo);
      const { list, totalCount } = pageResult.data;
      switch (pageName) {
        case 'users':
          commit('changeUserList', list);
          commit('changeUserCount', totalCount);
          break;
        case 'role':
          commit('changeRoleList', list);
          commit('changeRoleCount', totalCount);
          break;
        case 'goods':
          commit('changeGoodList', list);
          commit('changeGoodCount', totalCount);
        case 'menu':
          commit('changeMenuList', list);
          commit('changeMenuCount', totalCount);
      }
    },
    async deletePageDataAction({ dispatch }, payload: any) {
      const { pageName, id } = payload;
      const pageUrl = `/${pageName}/${id}`;
      await deletePageData(pageUrl);
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      });
    },

    async createPageDataAction({ dispatch }, payload: any) {
      const { pageName, newData } = payload;
      const pageUrl = `/${pageName}`;
      await createPageData(pageUrl, newData);
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      });
    },

    async editPageDataAction({ dispatch }, payload: any) {
      const { pageName, editData, id } = payload;
      const pageUrl = `/${pageName}/${id}`;
      await editPageData(pageUrl, editData);
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      });
    }
  }
};

export default systemModule;
