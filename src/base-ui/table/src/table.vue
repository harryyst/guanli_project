<template>
  <div class="table">
    <div class="header">
      <slot name="header">
        <div class="title">
          {{ title }}
        </div>
        <div class="handler">
          <slot name="header-handler"></slot>
        </div>
      </slot>
    </div>
    <el-table
      :data="dataList"
      border
      style="width: 100%"
      @selection-change="handleSelectionChange"
      v-bind="childrenProps"
    >
      <el-table-column v-if="showSelectColumn" type="selection">
      </el-table-column>
      <el-table-column v-if="showIndexColumn" type="index" label="序号">
      </el-table-column>
      <template v-for="propItem in propList" :key="propItem.prop">
        <el-table-column v-bind="propItem" align="center" show-overflow-tooltip>
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer">
      <slot name="footer">
        <el-pagination
          :currentPage="page.currentPage"
          :page-size="page.pageSize"
          :page-sizes="[10, 20, 30]"
          :small="small"
          :disabled="disabled"
          :background="background"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    title: {
      type: String
    },
    dataList: {
      type: Array
    },
    propList: {
      type: Array
    },
    showIndexColumn: {
      type: Boolean
    },
    showSelectColumn: {
      type: Boolean
    },
    listCount: {
      type: Number
    },
    page: {
      type: Object,
      default: () => ({ currentPage: 0, pageSize: 10 })
    },
    childrenProps: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ['selection-change', 'update:page'],
  setup(props, { emit }) {
    const handleSelectionChange = (value: any) => {
      emit('selection-change', value);
    };
    const handleCurrentChange = (currentPage: number) => {
      emit('update:page', { ...props.page, currentPage });
    };
    const handleSizeChange = (pageSize: number) => {
      emit('update:page', { ...props.page, pageSize });
    };
    return { handleSelectionChange, handleCurrentChange, handleSizeChange };
  }
});
</script>

<style scoped>
.table {
  padding: 20px;
}
</style>
