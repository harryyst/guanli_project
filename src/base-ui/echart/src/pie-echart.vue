<template>
  <div class="pie-echart">
    <base-echart :options="options"> </base-echart>
  </div>
</template>

<script setup lang="ts">
import BaseEchart from '@/base-ui/echart';
import { IDataType } from './types';
import { defineProps, computed } from 'vue';
const props = defineProps<{
  pieData: IDataType[];
}>();
const options = computed(() => {
  return {
    series: [
      {
        type: 'pie',
        data: props.pieData,
        radius: '50%'
      }
    ]
  };
});
</script>

<style scoped></style>
