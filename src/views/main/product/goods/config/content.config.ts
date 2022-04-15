export const contentTableConfig = {
  title: '商品列表',
  showIndexColumn: true,
  showSelectColumn: true,
  propList: [
    { prop: 'name', label: '商品名称', minWidth: '180' },
    {
      prop: 'oldPrice',
      label: '原价格',
      minWidth: '180'
    },
    {
      prop: 'newPrice',
      label: '现价格',
      minWidth: '180'
    },
    {
      prop: 'imgUrl',
      label: '商品图片',
      minWidth: '180',
      slotName: 'image'
    },
    { prop: 'enable', label: '状态', minWidth: '180', slotName: 'status' },
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
  ]
};
