/*
 * @Author: wenyu_zxb
 * @Date: 2021-03-01 11:49:09
 * @LastEditTime: 2021-03-01 14:11:27
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
