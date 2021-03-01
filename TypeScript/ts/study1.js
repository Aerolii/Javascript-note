/*
 * @Author: wenyu_zxb
 * @Date: 2021-03-01 11:49:09
 * @LastEditTime: 2021-03-01 14:09:29
 * @LastEditors: wenyu_zxb
 * @Description: TypeScript学习笔记 基础类型
 * @FilePath: /TypeScript/ts/study1.ts
 */
// Boolean
var isDone = false;
// Number
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 10;
var octalLiteral = 484;
// String
var s = '123';
// Array
// 第一种，可以在元素类型后面接上 []，表示由此类型元素组成的一个数组：
var arr = ['1', '2', '3'];
// 第二种方式是使用数组泛型，Array<元素类型>：
var arr1 = [1, 2, 3];
// 元组 Tuple
// 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
var x;
x = ['123', 123];
console.log('x :>> ', x);
var x1;
x1 = ['1', '2'];
console.log('x1 :>> ', x1);
// 枚举
// enum类型是对JavaScript标准数据类型的一个补充。 像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。
// 默认情况下，从0开始为元素编号
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
var c = Color.red;
console.log('c :>> ', c);
var cName = Color[1];
console.log('cName :>> ', cName);
