<template>
  <div class="user">
      <page-search :formConfig="formConfig" />
    <div class="content">
      <StTable :userList="userList" :propList = "propList"/>
      
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent,computed } from 'vue';
import { formConfig } from './config/search.config';
import PageSearch from '@/components/page-search'
import { useStore } from 'vuex';
import StTable from '@/base-ui/table'
export default defineComponent({
  components: {
    PageSearch,
    StTable
  },
  name: 'user',
  setup() {
    const store = useStore();
    store.dispatch('system/getPageListAction',{
      pageUrl:'/users/list',
      queryInfo:{
        offset:0,
        size:10
      }
    })

    const userList = computed(()=>store.state.system.userList)
    const userCount = computed(()=>store.state.system.userCount)
    const propList=[
      {prop:'name',label:'用户名',minWidth:'180'},
       {prop:'realname',label:'真实姓名',minWidth:'180'},
        {prop:'cellphone',label:'电话号码',minWidth:'180'},
    
    
    ]
    return { formConfig,userList,propList };
  }
});
</script>

<style scoped></style>
