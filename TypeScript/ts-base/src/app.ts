/*
 * @Author: wenyu_zxb
 * @Date: 2021-03-01 23:31:22
 * @LastEditTime: 2021-03-01 23:48:26
 * @LastEditors: wenyu_zxb
 * @Description:编译
 * @FilePath: /TypeScript/src/app.ts
 */
let str: string = '123'
console.log(str)
function fn(a: number, b: number) {
  return a + b
}
let box1 = document.getElementById('box1')
// 使用？运算符避免空值
box1?.addEventListener('click', () => {
  console.log('1 :>> ', 1)
})
