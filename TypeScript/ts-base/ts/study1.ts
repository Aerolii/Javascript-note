/*
 * @Author: wenyu_zxb
 * @Date: 2021-03-01 11:49:09
 * @LastEditTime: 2021-03-01 16:17:09
 * @LastEditors: wenyu_zxb
 * @Description: TypeScript学习笔记 基础类型
 * @FilePath: /TypeScript/ts/study1.ts
 */

/**
 * Boolean
 */
let isDone: boolean = false

/*
 * Number
 */
let decLiteral: number = 6
let hexLiteral: number = 0xf00d
let binaryLiteral: number = 0b1010
let octalLiteral: number = 0o744

/**
 * String
 */
let s: string = '123'

/**
 * Array
 */
// 第一种，可以在元素类型后面接上 []，表示由此类型元素组成的一个数组：
let arr: string[] = ['1', '2', '3']
// 第二种方式是使用数组泛型，Array<元素类型>：
let arr1: Array<number> = [1, 2, 3]

/**
 * 元组 Tuple
 * 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
 */
let x: [string, number]
x = ['123', 123]
console.log('x :>> ', x)

let x1: [string, string]
x1 = ['1', '2']
console.log('x1 :>> ', x1)

/**
 * 枚举
 * enum类型是对JavaScript标准数据类型的一个补充。 像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。
 * 默认情况下，从0开始为元素编号
 */
enum Color {
  red,
  green,
  blue
}
let c: Color = Color.red
console.log('c :>> ', c) // 0
// 枚举类型提供的一个便利是你可以由枚举的值得到它的名字。
let cName: string = Color[1]
console.log('cName :>> ', cName) // green

// 枚举使用案例
enum Gender {
  Male,
  Female
}

let person: { name: string; gender: Gender } = { name: 'weenie', gender: Gender.Male }
console.log('person :>> ', person)
console.log(person.gender === Gender.Male)

/**
 * Any
 * 不确定类型
 */
let notSure: any = 4
notSure = 'hello'
console.log('notSure :>> ', notSure)

/**
 * Void
 * 某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。
 */
function warnUser(): void {
  console.log('This is my warning message')
}
warnUser()

// 声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
let unusable: void = undefined

/**
 * Null 和 Undefined
 * TypeScript里，undefined和null两者各自有自己的类型分别叫做undefined和null。
 * 默认情况下null和undefined是所有类型的子类型。
 * 就是说你可以把 null和undefined赋值给number类型的变量。
 * 当你指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自。
 */
let u: undefined = undefined
let n: null = null
console.log('u,n :>> ', u, n)

/**
 * Never
 * never类型表示的是那些永不存在的值的类型。
 * never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型；
 * 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。
 * never类型是任何类型的子类型，也可以赋值给任何类型；
 * 没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。
 * 即使 any也不可以赋值给never。
 */
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message)
}

// 推断的返回值类型为never
function fail() {
  return error('Something failed')
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
  while (true) {}
}

/**
 * Object
 * object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。
 * 使用object类型，就可以更好的表示像Object.create这样的API。
 */
// declare function create(o: object | null): void
// create({ prop: 0 }) // OK
// create(null) // OK

/**
 * 类型断言
 */
let str1: any = 'hello world'
let len: number = (<string>str1).length
console.log('len :>> ', len)
let len2: number = (str1 as string).length
console.log('len2 :>> ', len2)
