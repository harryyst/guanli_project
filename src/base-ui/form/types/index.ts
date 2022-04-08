export interface IFormItem {
  type: string;
  label: string;
  rules?: any[];
  placeholder?: any;
  options?: any[];
  otherOptions?: any;
}

export interface IForm {
  formItems: IFormItem[];
  labelWidth?: string;
  colLayout?: any;
  itemLayout?: any;
  itemStyle?: any;
}
