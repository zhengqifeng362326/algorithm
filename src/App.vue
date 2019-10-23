<template>
  <div id="app">
    <el-container>
      <el-aside width="200px">
        <sider-bar></sider-bar>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <div>
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SiderBar from './components/SiderBar.vue'

@Component({
  components: {
    SiderBar
  }
})
export default class App extends Vue {}
</script>

<style lang="less">
html,
body {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

ul,
li {
  list-style: none;
}

.el-header {
  background-color: #fff;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  position: relative;
  z-index: 10;
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
  box-shadow: 2px 0 6px rgba(0,21,41,.35);
}

.el-main {
  background: #f0f2f5;
  & > div {
    height: 100%;
    padding: 16px;
    border-radius: 4px;
    background: #fff;
    color: #333;
    box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, .6);
  }
}

#app,
.el-container {
  height: 100%;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
