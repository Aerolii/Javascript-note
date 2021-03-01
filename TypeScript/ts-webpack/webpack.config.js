/*
 * @Author: wenyu_zxb
 * @Date: 2021-03-02 00:07:47
 * @LastEditTime: 2021-03-02 00:10:57
 * @LastEditors: wenyu_zxb
 * @Description:webpack 配置typescript打包配置信息
 * @FilePath: /TypeScript/ts-webpack/webpack.config.js
 */

const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src/index.ts'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'boundle.js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ]
  }
}
