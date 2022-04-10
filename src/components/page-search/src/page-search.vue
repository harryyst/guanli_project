<template>
    <div class="page-search">
      <st-form v-bind="formConfig" v-model="formData">
        <template #footer>
          <el-button type="primary">搜索</el-button>
        </template>
      </st-form>
    </div>
    <div class="content"></div>
</template>

<script lang="ts">
import { defineComponent,ref } from 'vue'
import StForm from '@/base-ui/form/index';

export default defineComponent({
    props:{
        formConfig:{
            type:Object,
            required:true
        }
    },
    components:{
        StForm 
    },
    setup () {
        const formData = ref({
      id:'',
      name:'',
      password:'',
      sport:'',
      createTime:''
    })

        return {formData}
    }
})
</script>

<style scoped>

</style>