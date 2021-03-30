/*
 * @Author: Bob
 * @Date: 2021-03-29 17:18:50
 * @LastEditTime: 2021-03-29 17:50:04
 * @LastEditors: Bob
 * @Description:入口
 * @FilePath: /Javascript/study-note/common-tools/src/main.js
 */
import { deepClone } from './common-utils/commonUtils'
console.log('deepClone :>> ', deepClone)
const testObj = {
  a: 1,
  b: [1, 2, 3],
  c: {
    c1: 123,
    c2: [{ c11: 123, c12: { c121: '123' } }]
  },
  d: [4, 5, 6]
}

const s = deepClone(testObj)
s.d = 1
