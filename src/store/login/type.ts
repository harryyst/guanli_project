import { ISystemState } from "../main/system/type";

export default interface IRootState {
  name: string;
  age: number;
}

export interface IRootWithModule{
  system:ISystemState
}