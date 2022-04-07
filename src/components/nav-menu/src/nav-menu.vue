<template>
  <div class="nav-menu">
    <div class="logo">
      <img src="../../../assets/img/logo.svg" alt="" />
      <span v-if="!collapse" class="title">Vue3</span>
    </div>
    <!-- <el-row class="tac"> -->
    <!-- <el-col :span="12"> -->
    <el-menu
      default-active="2"
      class="el-menu-vertical"
      background-color="bisque"
      height="100%"
      :collapse="collapse"
      :unique-opened="true"
    >
      <template v-for="item in userMenus" :key="item.id">
        <template v-if="item.type === 1">
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <el-icon><box /></el-icon>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item
                :index="subitem.id + ''"
                @click="handleItemClick(subitem)"
              >
                <span>{{ subitem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-else>
          <el-menu-item>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
    <!-- </el-col> -->
    <!-- </el-row> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import { Box } from '@element-plus/icons-vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Box
  },
  setup() {
    const store = useStore();
    const userMenus = computed(() => store.state.login.userMenus);

    const router = useRouter();
    const handleItemClick = (item: any) => {
      // console.log(item);
      router.push({
        path: item.url ?? ''
      });
    };
    return { userMenus, handleItemClick };
  }
});
</script>

<style scoped>
.nav-menu {
  background-color: bisque;
  height: 100%;
}
.logo {
  height: 28px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.logo img {
  height: 100%;
}
</style>
