import { IForm } from '@/base-ui/form/types';
export const formConfig: IForm = {
  labelWidth: '120px',
  itemStyle: {
    padding: '10px 40px'
  },
  colLayout: { span: 8 },
  formItems: [
    {
      label: '用户名',
      placeholder: '请输入用户名',
      type: 'input',
      field: 'name'
    },
    {
      label: '真实姓名',
      placeholder: '请输入真实姓名',
      type: 'input',
      field: 'realname'
    },
    {
      label: '用户状态',
      placeholder: '请选择用户状态',
      type: 'select',
      options: [
        { title: '启用', value: 1 },
        { title: '禁用', value: 0 }
      ],
      field: 'enable'
    },
    {
      label: '创建时间',
      placeholder: '请选择创建时间范围',
      type: 'datepicker',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      },
      field: 'createAt'
    }
  ]
};
