<template>
  <div>
    <div class="coin-item">
      <span class="title">面额：</span>
      <div class="content">
        <el-tag
          v-for="item in coinSettle.coinKinds"
          :key="item"
          :closable="item !== 1"
          @close="handleClose(tag)"
        >{{item}}</el-tag>
        <el-input
          class="input-new-tag"
          v-if="inputVisible"
          v-model="inputValue"
          type="number"
          ref="saveTagInput"
          size="small"
          @keyup.enter.native="handleInputConfirm"
          @blur="handleInputConfirm"
        >
        </el-input>
        <el-button
          v-else
          class="button-new-tag"
          size="small"
          @click="showInput"
        >+ New Coin</el-button>
      </div>
    </div>
    <div class="coin-item">
      <span class="title">找零总额：</span>
      <div class="content">
        <el-input class="coin-count-ipt" v-model="deno"></el-input>
      </div>
    </div>
    <div class="coin-item">
      <span class="title">找零硬币数量：</span>
      <span class="content">{{minCoinAccount}}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CoinSettleCls from './js/coinSettle'

@Component
export default class CoinSettle extends Vue {
  public coinSettle: CoinSettleCls = new CoinSettleCls()
  public deno: number = 0
  public inputVisible: boolean = false
  public inputValue: number | string = ''

  public handleClose(tag: number) {
    this.coinSettle.coinKinds.splice(this.coinSettle.coinKinds.indexOf(tag), 1)
  }

  public showInput(): void {
    this.inputVisible = true
    this.$nextTick(() => {
      (this.$refs.saveTagInput as any).$refs.input.focus()
    })
  }

  public handleInputConfirm(): void {
    const inputValue = this.inputValue
    if (inputValue) {
      this.coinSettle.insertCoin(Number(inputValue))
    }
    this.inputVisible = false
    this.inputValue = ''
  }

  get minCoinAccount() {
    return this.coinSettle.getCoinAccount(this.deno)
  }
}
</script>

<style lang="less" scoped>
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
.coin-item {
  display: flex;
  align-items: center;
  .title {
    width: 120px;
    flex-grow: 0;
  }
  .content {
    flex-grow: 1;
    flex-basis: 0;
    .coin-count-ipt {
      width: 64px;
    }
  }
  &:not(:last-child) {
    margin-bottom: 12px;
  }
}
</style>