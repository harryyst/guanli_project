import { RouteRecordRaw } from 'vue-router';
let firstMenu: any = null;
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
        if (!firstMenu) {
          firstMenu = menu;
        }
      } else {
        _recuiseGetRoute(menu.children);
      }
    }
  };

  _recuiseGetRoute(userMenus);
  return routes;
}

export function pathMapToMenu(userMenus: any[], currentPath: string): any {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath);
      if (findMenu) {
        return findMenu;
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu;
    }
  }
}

export { firstMenu };
