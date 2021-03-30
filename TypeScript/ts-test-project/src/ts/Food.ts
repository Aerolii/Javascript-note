/*
 * @Author: wenyu_zxb
 * @Date: 2021-03-18 22:42:38
 * @LastEditTime: 2021-03-19 23:24:41
 * @LastEditors: wenyu_zxb
 * @Description:食物类
 * @FilePath: /ts-test-project/src/ts/Food.ts
 */

class Food {
  food: HTMLElement
  constructor() {
    this.food = <HTMLElement>document.getElementById('food')
    this.setFoodPosition()
  }

  public get x(): number {
    return this.food.offsetLeft
  }

  public get y(): number {
    return this.food.offsetTop
  }

  setFoodPosition() {
    const randomX = this.createRandomNumber()
    const randomY = this.createRandomNumber()
    this.food.style.left = randomX + 'px'
    this.food.style.top = randomY + 'px'
  }
  createRandomNumber() {
    return Math.round(Math.random() * 32) * 10
  }
}

export default Food
