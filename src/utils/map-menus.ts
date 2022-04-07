import { RouteRecordRaw } from 'vue-router';

export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = [];

  const allRoutes: RouteRecordRaw[] = [];
  const routeFiles = require.context('../router/main/', true, /\.ts/);
  routeFiles.keys().forEach((key) => {
    const route = require('../router/main' + key.split('.')[1]);
    allRoutes.push(route.default);
  });

  const _recuiseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => {
          return route.path === menu.url;
        });
        if (route) routes.push(route);
      } else {
        _recuiseGetRoute(menu.children);
      }
    }
  };

  _recuiseGetRoute(userMenus);
  return routes;
}
