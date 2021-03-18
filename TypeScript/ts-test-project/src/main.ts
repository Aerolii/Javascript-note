/*
 * @Author: wenyu_zxb
 * @Date: 2021-03-17 23:58:10
 * @LastEditTime: 2021-03-18 00:15:43
 * @LastEditors: wenyu_zxb
 * @Description:
 * @FilePath: /TypeScript/ts-test-project/src/main.ts
 */
const s: string = '123'

const fn = (params: string): string => params + ' ' + s

const s1 = fn('hello')
const s2 = fn('how are you?')

console.log('s1, s2 :>> ', s1, s2)
console.log('what`s wrong?')
