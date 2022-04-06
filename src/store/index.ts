import { createStore } from 'vuex';
import login from './login/login';
import IRootState from './login/type';

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
    login
  }
});

export function setupStore() {
  store.dispatch('login/loadLocalLogin');
}
