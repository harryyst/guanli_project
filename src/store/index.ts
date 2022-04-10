import { createStore } from 'vuex';
import login from './login/login';
import IRootState from './login/type';
import system from './main/system/system'

export const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'harryyst',
      age: 12
    };
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    login,
    system
  }
});

export function setupStore() {
  store.dispatch('login/loadLocalLogin');
}
