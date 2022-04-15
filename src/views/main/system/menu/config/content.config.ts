export const contentTableConfig = {
  title: '菜单列表',
  showIndexColumn: true,
  showSelectColumn: true,
  propList: [
    { prop: 'name', label: '菜单名称', minWidth: '180' },

    { prop: 'type', label: '类型', minWidth: '180' },
    { prop: 'url', label: '菜单url', minWidth: '180' },
    { prop: 'permission', label: '按钮权限', minWidth: '180' },

    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '250',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '250',
      slotName: 'updateAt'
    },
    {
      label: '操作',
      minWidth: '120',
      slotName: 'handler'
    }
  ],
  childrenProps: {
    rowKey: 'id',
    treeProp: {
      children: 'children'
    }
  }
};
