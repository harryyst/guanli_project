import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { store, setupStore } from './store';
import './service/axios_demo';
import 'normalize.css';
import './assets/css/index.less';
import ElementIcon from '@element-plus/icons-vue';
import { ElCollapseTransition } from 'element-plus';
import { globalRegister } from './global';
// import ElementPlus from 'element-plus';
// import 'element-plus/dist/index.css';
const app = createApp(App);
app.component(ElCollapseTransition.name, ElCollapseTransition);
setupStore();
app.use(globalRegister);
app.use(store).use(router).mount('#app');
// stRequest.request({
//   url: '/home/multidata',
//   method: 'GET'
// });
