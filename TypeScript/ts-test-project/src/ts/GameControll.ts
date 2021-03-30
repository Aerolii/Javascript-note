/*
 * @Author: wenyu_zxb
 * @Date: 2021-03-18 22:42:55
 * @LastEditTime: 2021-03-19 23:23:19
 * @LastEditors: wenyu_zxb
 * @Description:
 * @FilePath: /ts-test-project/src/ts/GameControll.ts
 */

import Food from './Food'
import ScorePanel from './ScorePanel'
import Snake from './Snake'

/**
 * 键盘事件
 * left :ArrowLeft
 * up:ArrowUp
 * right:ArrowRight
 * down:ArrowDown
 */

class GameControll {
  food: Food
  snake: Snake
  score: ScorePanel
  keyCode: number
  constructor() {
    this.food = new Food()
    this.snake = new Snake(0, 320)
    this.score = new ScorePanel()
    this.keyCode = 39

    // this.keyco
    this.init()
  }
  init() {
    this.addEvent()
  }
  addEvent() {
    document.body.addEventListener('keydown', e => {
      this.keyBordHandler(e.key)
    })
  }
  keyBordHandler(key: string) {
    switch (key) {
      case 'ArrowLeft':
        this.snake.x -= 10
        break
      case 'ArrowRight':
        this.snake.x += 10
        break
      case 'ArrowUp':
        this.snake.y -= 10
        break
      case 'ArrowDown':
        this.snake.y += 10
        break
    }
    if (this.snake.x === this.food.x && this.snake.y === this.food.y) {
      this.food.setFoodPosition()
      this.snake.eatFood()
    }
  }
}

export default GameControll
