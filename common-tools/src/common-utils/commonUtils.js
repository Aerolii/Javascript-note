/*
 * @Author: Bob
 * @Date: 2021-03-29 17:18:29
 * @LastEditTime: 2021-03-30 14:15:20
 * @LastEditors: Bob
 * @Description:
 * @FilePath: /Javascript/study-note/common-tools/src/common-utils/commonUtils.js
 */

/**
 * @description 深度克隆：
 * 1.检测参数类型
 * 2.根据参数构造函数类型确认返回值类型
 * 3.遍历：基本类型复制值、引用类型递归
 * 4.返回对象
 * @param {Object} source 对象或数组
 * @returns {Object}
 */
export const deepClone = function (source) {
  if (!source && typeof source !== 'object') {
    throw new Error('error arguments', 'deepClone')
  }
  const resObj = source.constructor === Array ? [] : {}
  Object.entries(source).forEach(([key, val]) => {
    if (val && typeof val === 'object') {
      resObj[key] = deepClone(val)
    } else {
      resObj[key] = val
    }
  })
  return resObj
}
