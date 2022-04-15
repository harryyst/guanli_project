import { createStore } from 'vuex';
import login from './login/login';
import IRootState from './login/type';
import system from './main/system/system';
import { getPageListData } from '@/service/main/system/system';
import dashboard from './main/analysis/dashboard';
export const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'harryyst',
      age: 12,
      entireDepartment: [],
      entireRole: [],
      entireMenu: []
    };
  },
  getters: {},
  mutations: {
    changeEntireDepartment(state, list) {
      state.entireDepartment = list;
    },
    changeEntireRole(state, list) {
      state.entireRole = list;
    },
    changeEntireMenu(state, list) {
      state.entireMenu = list;
    }
  },
  actions: {
    async getInitialDataAction({ commit }) {
      const departmentResult = await getPageListData('/department/list', {
        offset: 0,
        size: 10
      });
      const { list: departmentList } = departmentResult.data;
      const roleResult = await getPageListData('/role/list', {
        offset: 0,
        size: 10
      });
      const { list: roleList } = roleResult.data;
      const menuResult = await getPageListData('/menu/list', {
        offset: 0,
        size: 100
      });
      const { list: menuList } = menuResult.data;
      commit('changeEntireMenu', menuList);
      commit('changeEntireDepartment', departmentList);
      commit('changeEntireRole', roleList);
    }
  },
  modules: {
    login,
    system,
    dashboard
  }
});

export function setupStore() {
  store.dispatch('login/loadLocalLogin');
  store.dispatch('getInitialDataAction');
}
