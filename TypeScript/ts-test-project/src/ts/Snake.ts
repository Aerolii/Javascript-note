/*
 * @Author: wenyu_zxb
 * @Date: 2021-03-18 22:42:24
 * @LastEditTime: 2021-03-22 10:33:14
 * @LastEditors: wenyu_zxb
 * @Description:蛇
 * @FilePath: /ts-test-project/src/ts/Snake.ts
 */

class Snake {
  snake: HTMLElement
  bodies: HTMLCollection
  snakeHead: HTMLElement
  min: number
  max: number
  constructor(min: number, max: number) {
    this.snake = <HTMLElement>document.getElementById('snake')!
    this.bodies = this.snake.getElementsByTagName('div')
    this.snakeHead = <HTMLElement>this.bodies[0]
    this.min = min
    this.max = max
  }

  public get x(): number {
    return this.snakeHead.offsetLeft
  }

  public get y(): number {
    return this.snakeHead.offsetTop
  }

  public set x(v: number) {
    if (v < this.min || v > this.max) {
      throw new Error('撞墙啦')
    }
    this.checkBody()
    this.setBody()
    // console.log(v)
    // console.log(this.snakeHead.style.left)
    if (this.bodies.length > 1) {
      // if (v < this.x || v) {
      // }
    }
    console.log('this.x,v :>> ', this.x, v)
    this.snakeHead.style.left = v + 'px'
  }

  public set y(v: number) {
    // 边界检测
    if (v < this.min || v > this.max) {
      throw new Error('撞墙啦')
    }
    this.setBody()
    this.checkBody()
    this.snakeHead.style.top = v + 'px'
  }

  addBody() {
    this.snake.appendChild(document.createElement('div'))
  }
  setBody() {
    const body = this.bodies
    for (let i = body.length - 1; i > 0; i--) {
      const element = <HTMLElement>body[i]
      element.style.left = (<HTMLElement>body[i - 1]).offsetLeft + 'px'
      element.style.top = (<HTMLElement>body[i - 1]).offsetTop + 'px'
    }
  }
  eatFood() {
    this.addBody()
    this.setBody()
  }
  checkBody() {
    // for (let i = 1; i < this.bodies.length; i++) {
    //   const element = this.bodies[i]
    //   console.log('element :>> ', element)
    // }
  }
}
export default Snake
