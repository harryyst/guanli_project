import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { store, setupStore } from './store';
import './service/axios_demo';
import stRequest from './service';
import 'normalize.css';
import './assets/css/index.less';
import ElementIcon from '@element-plus/icons-vue';
import { ElCollapseTransition } from 'element-plus';
// import ElementPlus from 'element-plus';
// import 'element-plus/dist/index.css';
const app = createApp(App);
app.component(ElCollapseTransition.name, ElCollapseTransition);
app.use(store).use(router).mount('#app');
setupStore();
stRequest.request({
  url: '/home/multidata',
  method: 'GET'
});
