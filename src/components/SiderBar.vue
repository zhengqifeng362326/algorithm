<template>
  <el-menu
    :default-active="activeIndex"
    :router="true"
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <template v-for="menu in routeMenus">
      <el-submenu v-if="'children' in menu" :key="menu.name" :index="menu.name">
        <template slot="title">
          <i :class="menu.icon"></i>
          <span>{{menu.cnName}}</span>
        </template>
        <el-menu-item
          v-for="childMenu in menu.children"
          :route="childMenu.path[0] === '/' ? childMenu.path : `${menu.path}/${childMenu.path}`"
          :key="childMenu.name"
          :index="childMenu.name"
          :disabled="activeIndex === childMenu.name"
        >
          <span>{{childMenu.cnName}}</span>
        </el-menu-item>
      </el-submenu>
      <el-menu-item v-else :key="menu.name" :route="menu.path" :index="menu.name" :disabled="activeIndex === childMenu.name">
        <span slot="title">{{menu.cnName}}</span>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { routeMenus } from '@/constants/routes.ts'

@Component
export default class extends Vue {
  get routeMenus() {
    return routeMenus
  }
  get activeIndex() {
    return this.$route.name
  }
}
</script>

<style lang="less" scoped>
.el-menu {
  border-right: 0;
  height: 100%;
  .el-menu-item.is-disabled {
    opacity: 1;
  }
}
</style>