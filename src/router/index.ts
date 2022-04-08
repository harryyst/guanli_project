import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import localCache from '@/utils/cache';
import { firstMenu } from '@/utils/map-menus';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    component: () => import('@/views/login/logIn.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/mainView.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = localCache.getCache('token');
    if (!token) {
      return '/login';
    }
  }
  if (to.path === '/main') {
    return firstMenu.url;
  }
});
export default router;
