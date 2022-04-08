<template>
  <div class="user">
    <div class="search">
      <st-form v-bind="formConfig" />
    </div>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import StForm from '@/base-ui/form/index';
import { formConfig } from './config/search.config';
export default defineComponent({
  components: {
    StForm
  },
  name: 'user',
  setup() {
    return { formConfig };
  }
});
</script>

<style scoped></style>
