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
      field:'name'
    },
    {
      label: '密码',
      placeholder: '请输入密码',
      type: 'input',
      field:'password'
    },
    {
      label: '喜欢的运动',
      placeholder: '请选择喜欢的运动',
      type: 'select',
      options: [
        { title: '篮球', value: 'basketball' },
        { title: '足球', value: 'football' }
      ],
      field:'sport'
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
      field:'createTime'
    }
  ]
};
