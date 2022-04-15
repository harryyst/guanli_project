<template>
  <div class="page-content">
    <st-table
      :dataList="dataList"
      v-bind="contentTableConfig"
      :listCount="listCount"
      v-model:page="pageInfo"
    >
      <template #header-handler>
        <el-button @click="handleCreateClick">新建用户</el-button>
      </template>
      <template #status="scope">
        <el-button>{{ scope.row.enable ? '启用' : '禁用' }}</el-button>
      </template>
      <template #createAt="scope">
        <strong>{{ $filters.formatTime(scope.row.createAt) }}</strong>
      </template>
      <template #updateAt="scope">
        <strong>{{ $filters.formatTime(scope.row.updateAt) }}</strong>
      </template>
      <template #handler="scope">
        <div class="handle-btns">
          <el-button type="text" @click="handleEditClick(scope.row)"
            >编辑</el-button
          >
          <el-button type="text" @click="handleDeleteClick(scope.row)"
            >删除</el-button
          >
        </div>
      </template>

      <template
        v-for="item in otherPropSlots"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </st-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from 'vue';
import { useStore } from 'vuex';
import StTable from '@/base-ui/table';
import { usePermission } from '@/hooks/use-permission';
export default defineComponent({
  components: {
    StTable
  },
  props: {
    contentTableConfig: {
      type: Object
    },
    pageName: {
      type: String,
      required: true
    }
  },
  emits: ['newBtnClick', 'editBtnClick'],
  setup(props, { emit }) {
    const isQuery = usePermission(props.pageName, 'query');
    const isDelete = usePermission(props.pageName, 'delete');
    const isUpdate = usePermission(props.pageName, 'update');
    const isCreate = usePermission(props.pageName, 'create');
    const pageInfo = ref({ currentPage: 1, pageSize: 10 });
    const handleDeleteClick = (item: any) => {
      store.dispatch('system/deletePageDataAction', {
        pageName: props.pageName,
        id: item.id
      });
    };
    watch(pageInfo, () => {
      getPageData();
    });
    const store = useStore();
    const getPageData = (query: any = {}) => {
      store.dispatch('system/getPageListAction', {
        pageName: props.pageName,
        queryInfo: {
          offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...query
        }
      });
    };
    getPageData();
    const dataList = computed(() =>
      store.getters[`system/pageListData`](props.pageName)
    );
    const listCount = computed(() =>
      store.getters[`system/pageListCount`](props.pageName)
    );
    const otherPropSlots = props.contentTableConfig?.propList.filter(
      (item: any) => {
        if (item.slotName === 'status') {
          return false;
        }
        if (item.slotName === 'createAt') {
          return false;
        }
        if (item.slotName === 'updateAt') {
          return false;
        }
        if (item.slotName === 'handler') {
          return false;
        }
        return true;
      }
    );

    const handleEditClick = (item: any) => {
      emit('editBtnClick', item);
    };

    const handleCreateClick = () => {
      emit('newBtnClick');
    };

    return {
      dataList,
      getPageData,
      listCount,
      pageInfo,
      otherPropSlots,
      isDelete,
      isUpdate,
      isCreate,
      handleDeleteClick,
      handleEditClick,
      handleCreateClick
    };
  }
});
</script>

<style scoped></style>
