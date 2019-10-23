type RowPath = number[];

interface ShortPathInter {
  distanceArr: RowPath[];
  createDistanceArr: (row: number, column: number) => void;
  insertRow: () => void;
  insertColumn: () => void;
  getShortPath: (row: number, column: number) => number;
}

export default class ShortPath implements ShortPathInter {
  public distanceArr: RowPath[] = [];

  public createDistanceArr(row: number = 1, column: number = 1): void {
    let i: number = 0;
    while (++i <= row) {
      this.distanceArr.push(new Array(column));
    }
  }

  public insertRow(): void {
    this.distanceArr.push(new Array(this.distanceArr[0].length));
  }

  public insertColumn(): void {
    for (const i of this.distanceArr) {
      i.push();
    }
  }

  public getShortPath(row: number, column: number): number {
    if (row >= this.distanceArr.length || column >= this.distanceArr[0].length || !this.distanceArr[row][column] ) {
      return 0;
    }
    if (row === 0 && column === 0) {
      return this.distanceArr[row][column];
    }
    if (row === 0) {
      return this.distanceArr[row][column] + this.getShortPath(row, column - 1);
    }
    if (column === 0) {
      return this.distanceArr[row][column] + this.getShortPath(row - 1, column);
    }
    const minNear = Math.min(this.getShortPath(row - 1, column), this.getShortPath(row, column - 1));
    return this.distanceArr[row][column] + minNear;
  }
}
