/*
 * @Author: wenyu_zxb
 * @Date: 2021-02-02 15:14:58
 * @LastEditTime: 2021-02-02 15:14:59
 * @LastEditors: wenyu_zxb
 * @Description:
 * @FilePath: /vite-project/postcss.config.js
 */

module.exports = {
  plugins: {
    autoprefixer: {
      browsers: ['Android >= 4.0', 'iOS >= 8']
    },
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*']
    }
  }
}
