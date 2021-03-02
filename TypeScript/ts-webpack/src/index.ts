/*
 * @Author: wenyu_zxb
 * @Date: 2021-03-02 00:11:03
 * @LastEditTime: 2021-03-02 13:44:57
 * @LastEditors: wenyu_zxb
 * @Description:入口文件
 * @FilePath: /TypeScript/ts-webpack/src/index.ts
 */
import { hi } from './_const'
function sum(a: number, b: number): number {
  return a + b
}

const s1 = sum(1, 2)
console.log(s1)
const s2 = sum(3, 4)
console.log('s1+s2 :>> ', s1 + s2)
console.log('hi :>> ', hi)
console.log('Promise :>> ', Promise)
