interface CoinSettleInter {
  coinKinds: number[];
  getCoinAccount: (deno: number, coinKinds: number[]) => number
}

export default class CoinSettleCls implements CoinSettleInter {
  public coinKinds: number[] = [1, 2, 3]

  public insertCoin(coin: number) {
    if (!this.coinKinds.includes(coin)) {
      this.coinKinds.push(coin)
      this.coinKinds.sort((x, y) => x - y)
    }
  }

  public getCoinAccount(deno: number, coinKinds: number[] = this.coinKinds): number {
    if (coinKinds.length === 1 && coinKinds[0] === 1) {
      return deno
    }
    if (deno >= coinKinds[coinKinds.length - 1]) {
      const newDeno = deno - coinKinds[coinKinds.length - 1]
      const newCoinKinds1 = coinKinds.slice(0, coinKinds.length - 1)
      return Math.min(1 + this.getCoinAccount(newDeno, coinKinds), this.getCoinAccount(deno, newCoinKinds1))
    }
    const newCoinKinds = coinKinds.slice(0, coinKinds.length - 1)
    return this.getCoinAccount(deno, newCoinKinds)
  }
}
