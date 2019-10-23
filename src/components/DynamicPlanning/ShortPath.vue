<template>
  <div>
    <ul>
      <li
        v-for="(rowItem, rowIndex) in shortPath.distanceArr"
        :key="rowIndex"
      >
        <ul class="flex-ul">
          <li
            v-for="(columnItem, columnIndex) in rowItem"
            :key="columnIndex"
          >
            <el-input
              :value="columnItem"
              type="number"
              @input="value => updateDistance(rowIndex, columnIndex, value)"
            ></el-input>
          </li>
        </ul>
      </li>
    </ul>
    <table>
      <tr>
        <th>row</th>
        <th>column</th>
        <th>distance</th>
      </tr>
      <tr>
        <td>
          <el-input v-model="rowValue"></el-input>
        </td>
        <td>
          <el-input v-model="columnValue"></el-input>
        </td>
        <td>{{shrotPathDistance}}</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ShortPathCls from './js/shortPath'

@Component
export default class extends Vue {
  public shortPath: ShortPathCls = new ShortPathCls()
  public rowValue: number = 0
  public columnValue: number = 0

  public updateDistance(row: number, column: number, value: number) {
    this.shortPath.distanceArr[row].splice(column, 1, Number(value))
  }

  private mounted() {
    this.shortPath.createDistanceArr(3, 3)
  }

  get shrotPathDistance() {
    return this.shortPath.getShortPath(this.rowValue, this.columnValue)
  }
}
</script>

<style lang="less" scoped>
ul,
li {
  padding: 0;
  margin: 0;
  list-style: none;
}
.flex-ul {
  display: flex;
  & > li {
    margin: 0 4px 4px 0;
    & /deep/ input {
      text-align: center;
    }
  }
}
li {
  & /deep/ .el-input__inner {
    padding: 0;
    width: 50px;
    height: 50px;
  }
}
th,
td {
  padding: 4px 8px;
  text-align: center;
}
</style>