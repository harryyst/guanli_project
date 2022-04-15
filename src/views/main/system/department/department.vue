<template>
  <div class="department">
    <page-content ref="asd"></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import PageContent from '@/components/page-content';
export default defineComponent({
  name: 'department',
  components: {
    PageContent
  },
  setup() {
    const asd = ref<InstanceType<typeof PageContent>>();
    // console.log(asd.value);
    return { asd };
  }
});
</script>

<style scoped></style>
