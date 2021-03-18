/*
 * @Author: wenyu_zxb
 * @Date: 2021-03-03 23:41:31
 * @LastEditTime: 2021-03-04 00:20:33
 * @LastEditors: wenyu_zxb
 * @Description:抽象类
 * @FilePath: /TypeScript/ts-base/src/part1/abstractClass.ts
 */

// 抽象类不可以创建实例
// 抽象类使用abstract 标识
// 抽象类可以有抽象方法

abstract class Animal {
  name: string
  constructor(name: string) {
    this.name = name
  }
  // 抽象方法 只能用于抽象类中
  // 抽象方法 不能有方法体
  // 抽象方法 必须在子类中重写
  // 抽象方法 必须包含返回值
  abstract sayHello(): void
}

// 如果子类继承一个抽象类，并且抽象类中包含抽象方法，则子类必须重写父类中的抽象方法
class Dog extends Animal {
  age: number
  constructor(name: string, age: number) {
    super(name)
    this.age = age
  }
  sayHello() {
    console.log(this.name + 'say hello.')
  }
}
class Person {
  constructor(private name: string, private age: number) {}
  sayHello() {
    console.log('my name is ' + this.name)
  }
}
const dog = new Dog('dog', 3)
dog.sayHello()
const per = new Person('aero', 18)

console.log('per :>> ', per)
per.sayHello()
