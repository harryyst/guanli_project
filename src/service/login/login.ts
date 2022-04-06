import stRequest from '../index';
import { IAccount } from './type';
enum LoginAPI {
  AccountLogin = '/Login',
  LoginUserInfo = '/users/',
  UserMenus = '/role/'
}
export function accountLoginRequest(account: IAccount) {
  return stRequest.post<any>({
    url: LoginAPI.AccountLogin,
    data: account
  });
}

export function requestUserInfoById(id: number) {
  return stRequest.get<any>({
    url: LoginAPI.LoginUserInfo + id
  });
}

export function requestUserMenusByRoleId(id: number) {
  return stRequest.get<any>({
    url: LoginAPI.UserMenus + id + '/menu/'
  });
}
