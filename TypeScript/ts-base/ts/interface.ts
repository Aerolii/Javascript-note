/*
 * @Author: wenyu_zxb
 * @Date: 2021-03-01 14:54:29
 * @LastEditTime: 2021-03-01 16:35:23
 * @LastEditors: wenyu_zxb
 * @Description:接口
 * @FilePath: /TypeScript/ts/interface.ts
 */

/**
 * TypeScript的核心原则之一是对值所具有的结构进行类型检查。
 * 它有时被称做“鸭式辨型法”或“结构性子类型化”。
 * 在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。
 */

interface LabelledValue {
  label: string
}
function printLabel(labelObj: LabelledValue) {
  console.log('labelObj :>> ', labelObj)
}
// LabelledValue接口就好比一个名字，用来描述上面例子里的要求。
// 它代表了有一个 label属性且类型为string的对象。
// 需要注意的是，我们在这里并不能像在其它语言里一样，说传给 printLabel的对象实现了这个接口。
// 我们只会去关注值的外形。
// 只要传入的对象满足上面提到的必要条件，那么它就是被允许的。
// 类型检查器不会去检查属性的顺序，只要相应的属性存在并且类型也是对的就可以。
let obj = { size: 10, label: '123' }
printLabel(obj)

/**
 * 可选属性
 * 可选属性的好处之一是可以对可能存在的属性进行预定义
 * 好处之二是可以捕获引用了不存在的属性时的错误
 */
interface SquareConfig {
  color?: string
  width?: number
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: 'white', area: 100 }
  if (config.color) {
    newSquare.color = config.color
  }
  if (config.width) {
    newSquare.area = config.width * config.width
  }
  return newSquare
}
const square1 = createSquare({})
console.log('square1 :>> ', square1)
const square2 = createSquare({ color: 'red' })
console.log('square2 :>> ', square2)
const square3 = createSquare({ color: 'green', width: 20 })
console.log('square3 :>> ', square3)

/**
 * 函数类型
 * 接口能够描述JavaScript中对象拥有的各种各样的外形
 * 除了描述带有属性的普通对象外，接口也可以描述函数类型。
 * 为了使用接口表示函数类型，我们需要给接口定义一个调用签名。
 * 它就像是一个只有参数列表和返回值类型的函数定义。
 * 参数列表里的每个参数都需要名字和类型。
 */
interface SearchFunc {
  (source: string, subString: string): boolean
}
// let func: SearchFunc
// func = function (src: string, sub: string): boolean {
//   let res = src.search(sub)
//   return res > -1
// }

// func = function (src, sub) {
//   return src.search(sub) > -1
// }

let fn1: SearchFunc = (src, sub) => src.search(sub) > -1

const sfn1: boolean = fn1('hello', 'o')
console.log('sfn1 :>> ', sfn1)

/**
 * 类类型
 * 类静态部分与实例部分的区别
 * 当一个类实现了一个接口时，只对其实例部分进行类型检查
 * constructor存在于类的静态部分，所以不在检查的范围内
 * 因此，我们应该直接操作类的静态部分
 */
interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface
}

interface ClockInterface {
  tick()
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
  return new ctor(hour, minute)
}

class DigitalClock implements ClockInterface {
  h: number
  m: number
  constructor(h: number, m: number) {
    this.h = h
    this.m = m
  }
  tick() {
    // console.log('beep beep')
    console.log('this.h :>> ', this.h + ':' + this.m)
  }
}

class AnlogClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log('tick tock')
  }
}

const c1 = createClock(DigitalClock, 17, 19)
const c2 = createClock(AnlogClock, 14, 14)
console.log('c1 :>> ', c1)
console.log('c2 :>> ', c2)
