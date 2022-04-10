<template>
    <div class="table">
        <el-table
    :data="userList"
    border
    style="width: 100%">
   <template v-for="propItem in propList" :key="propItem.prop">
     <el-table-column v-bind="propItem"></el-table-column>
   </template>
  </el-table>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props:{
        userList:{
            type:Array
        },
        propList:{
            type:Array
        }
    },
    setup () {
        

        return {}
    }
})
</script>

<style scoped>

</style>