/*
 * @Author: wenyu_zxb
 * @Date: 2021-03-01 19:43:48
 * @LastEditTime: 2021-03-01 20:32:37
 * @LastEditors: wenyu_zxb
 * @Description:Typescript 类
 * @FilePath: /TypeScript/ts/class/classDemo.ts
 */

/**
 * 传统的JavaScript程序使用函数和基于原型的继承来创建可重用的组件
 * 从ECMAScript 2015，也就是ECMAScript 6开始，JavaScript程序员将能够使用基于类的面向对象的方式。
 */

/**
 * 声明一个 Greeter类。
 * 这个类有3个成员：
 *    一个叫做 greeting的属性，一个构造函数和一个 greet方法。
 */
class Greeter {
  greeting: string
  constructor(message: string) {
    this.greeting = message
  }
  greet() {
    return 'Hello, ' + this.greeting
  }
}

const g1 = new Greeter('Tom')
console.log(g1.greet())

/**
 * 继承
 */
class Animal {
  name: string
  constructor(theName: string) {
    this.name = theName
  }
  move(distance: number = 0) {
    console.log(`${this.name} moved ${distance}`)
  }
}
// 派生类包含了一个构造函数，它 必须调用 super() 它会执行基类的构造函数
// 在构造函数里访问 this的属性之前，一定要调用 super()
// 这是TypeScript强制执行的一条重要规则。
class Snake extends Animal {
  constructor(name: string) {
    // 调用 super()执行基类的构造函数
    super(name)
  }
  // 重写父类的方法
  move(distance = 5) {
    console.log('snake moving...')
    super.move(distance) // snake moved 5
  }
}

class Horse extends Animal {
  constructor(name: string) {
    // 调用 super()执行基类的构造函数
    super(name)
  }
  // 重写父类的方法
  move(distance = 40) {
    console.log('horse moving...')
    super.move(distance) // horse moved 40
  }
}

const snake = new Snake('snake')
snake.move()
const horse = new Horse('horse')
horse.move()

/**
 * 公共，私有与受保护的修饰符
 * 在TypeScript里，成员都默认为 public
 */

// public
class Person {
  public name: string
  public constructor(theName: string) {
    this.name = theName
  }
  public move(distanceInMeters: number) {
    console.log(`${this.name} moved ${distanceInMeters}m.`)
  }
}

// private
class Book {
  private name: string
  constructor(name: string) {
    this.name = name
  }
}
const b1 = new Book('老人与海')
// console.log(b1.name) // error  'name' 是私有的.

/**
 * TypeScript使用的是结构性类型系统
 * 比较两种不同的类型时，并不在乎它们从何处而来，
 * 如果所有成员的类型都是兼容的，就认为它们的类型是兼容的。
 *
 */

// 比较带有 private或 protected成员的类型的时候
// 如果其中一个类型里包含一个 private成员，那么只有当另外一个类型中也存在这样一个 private成员，
// 并且它们都是来自同一处声明时，才认为这两个类型是兼容的。 对于 protected成员也使用这个规则。
class Food {
  private name: string
  constructor(name: string) {
    this.name = name
  }
}

class Noodles extends Food {
  constructor() {
    super('noodles')
  }
}

class Employee {
  private name: string
  constructor(name: string) {
    this.name = name
  }
}

let f1 = new Food('bread')
let n1 = new Noodles()
let e1 = new Employee('employee')
// 因为 Animal和 Rhino共享了来自 Animal里的私有成员定义 private name: string，因此它们是兼容的。
f1 = n1
// 当把 Employee赋值给 Animal的时候，得到一个错误，说它们的类型不兼容。
// 尽管 Employee里也有一个私有成员 name，但它明显不是 Animal里面定义的那个。
// f1 = e1 // 错误: Animal 与 Employee 不兼容.
console.log('f1 :>> ', f1)

/**
 * protected
 * protected修饰符与 private修饰符的行为很相似，但有一点不同， protected成员在派生类中仍然可以访问。
 */
class Color {
  protected name: string
  constructor(name: string) {
    this.name = name
  }
}

class Green extends Color {
  private department: string
  constructor(name: string, department: string) {
    super(name)
    this.department = department
  }
  public getColor(): string {
    return `This color is ${this.name}, it is a ${this.department} points.`
  }
}

const gc1 = new Green('green', '10')
console.log(gc1.getColor())
