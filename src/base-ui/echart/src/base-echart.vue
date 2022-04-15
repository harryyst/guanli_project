<template>
  <div class="base-echart">
    <div ref="echartDivRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps, withDefaults, watchEffect } from 'vue';
import * as echarts from 'echarts';
import { EChartsOption } from 'echarts';
import useEchart from '../hooks/useEchart';
const echartDivRef = ref<HTMLElement>();

const props = withDefaults(
  defineProps<{
    width?: string;
    height?: string;
    options: EChartsOption;
  }>(),
  { width: '100%', height: '360px' }
);

onMounted(() => {
  const { setOptions } = useEchart(echartDivRef.value!);

  watchEffect(() => {
    setOptions(props.options);
  });
});
</script>

<style scoped></style>
