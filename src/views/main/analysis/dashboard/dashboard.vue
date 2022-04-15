<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <st-card title="分类商品数量"> </st-card>
      </el-col>
      <el-col :span="10">
        <st-card title="不同城市商品销量"></st-card>
      </el-col>
      <el-col :span="7">
        <st-card title="分类商品数量"></st-card>
      </el-col>
    </el-row>

    <el-row :gutter="10">
      <el-col :span="12">
        <st-card title="分类商品的销量">
          <pie-echart :pieData="categoryGoodsCount"> </pie-echart>
        </st-card>
      </el-col>

      <el-col :span="12">
        <st-card title="分类商品的收藏"></st-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import * as echarts from 'echarts';
import StCard from '@/base-ui/card';
import BaseEchart, { PieEchart } from '@/base-ui/echart';

export default defineComponent({
  name: 'dashboard',
  components: {
    StCard,
    BaseEchart,
    PieEchart
  },
  setup() {
    const store = useStore();
    store.dispatch('dashboard/getDashboardDataAction');
    const categoryGoodsCount = computed(() => {
      return store.state.dashboard.categoryGoodsCount.map((item: any) => {
        return { name: item.name, value: item.goodsCount };
      });
    });
    return { categoryGoodsCount };
  }
});
</script>

<style scoped></style>
