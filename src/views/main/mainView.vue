<template>
  <div class="main">
    <div class="common-layout">
      <el-container class="container">
        <el-aside class="el-aside" :width="isCollapse ? '60px' : '210px'"
          ><nav-menu :collapse="isCollapse"></nav-menu
        ></el-aside>
        <el-container>
          <el-header
            ><nav-header @foldChange="handleFoldChange"></nav-header
          ></el-header>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import NavMenu from '@/components/nav-menu';
import NavHeader from '@/components/nav-header';
export default defineComponent({
  components: {
    NavMenu,
    NavHeader
  },
  setup() {
    const isCollapse = ref(false);
    const handleFoldChange = (isFold: boolean) => {
      isCollapse.value = isFold;
    };
    return { handleFoldChange, isCollapse };
  }
});
</script>
<style scoped>
.main {
  height: 100%;
}

.common-layout {
  height: 100%;
}
.container {
  height: 100%;
}

.el-aside {
  overflow-x: hidden;
  overflow-y: auto;
  line-height: 200px;
  text-align: left;
  cursor: pointer;
  background-color: #001529;
  transition: width 0.3s linear;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */
}
</style>
