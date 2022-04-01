import { createStore } from 'vuex';
interface IRootState{
  name:string
  age:number
}

export default createStore <IRootState>({
  state: () => {
    return {
      name: 'harryyst',
      age:12
    };
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {}
});
