/*
 * @Author: wenyu_zxb
 * @Date: 2021-03-17 23:58:10
 * @LastEditTime: 2021-03-18 23:11:01
 * @LastEditors: wenyu_zxb
 * @Description:
 * @FilePath: /ts-test-project/src/main.ts
 */
import './css/index.scss'
import Food from './ts/Food'
const f = new Food()
// f.setFoodPosition()
console.log(f.x)
console.log(f.y)

const s: string = '123'

const fn = (params: string): string => params + ' ' + s

const s1 = fn('hello')
const s2 = fn('how are you?')

console.log('s1, s2 :>> ', s1, s2)
console.log('what`s wrong?')
