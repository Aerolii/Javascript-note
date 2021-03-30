/*
 * @Author: wenyu_zxb
 * @Date: 2021-03-18 22:42:33
 * @LastEditTime: 2021-03-19 22:20:13
 * @LastEditors: wenyu_zxb
 * @Description: 记分板
 * @FilePath: /ts-test-project/src/ts/ScorePanel.ts
 */

class ScorePanel {
  score = 0
  scoreEl: HTMLElement
  levelEl: HTMLElement
  constructor() {
    this.scoreEl = <HTMLElement>document.getElementById('score')
    this.levelEl = <HTMLElement>document.getElementById('level')
  }
  add() {
    this.score++
    const lv = Math.ceil(this.score / 10)
    this.levelEl.innerHTML = (lv <= 10 ? lv : 10).toString()
    this.scoreEl.innerHTML = this.score.toString()
  }
}

export default ScorePanel
