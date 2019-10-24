<template>
  <div class="page-container">
    <div class="page-header">
      {{$cnName[routes.name]}}
    </div>
    <div class="page-main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class extends Vue {
  get routes() {
    return this.$route
  }
}
</script>

<style lang="less" scoped>
  .page-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    & > div {
      padding: 18px 20px;
    }
    .page-header {
      flex-grow: 0;
      border-bottom: 1px solid #ebeef5;
      box-sizing: border-box;
      font-weight: 600;
    }
    .page-main {
      flex-grow: 1;
      flex-basis: 0;
      width: 100%;
      overflow-y: auto;
    }
  }
</style>