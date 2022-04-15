import { ISystemState } from '../main/system/type';

export default interface IRootState {
  name: string;
  age: number;
  entireDepartment: [];
  entireRole: [];
  entireMenu: [];
}

export interface ILoginState {
  token: string;
  userInfo: any;
  userMenus: any;
  permissions: string[];
}

export interface IRootWithModule {
  system: ISystemState;
}
