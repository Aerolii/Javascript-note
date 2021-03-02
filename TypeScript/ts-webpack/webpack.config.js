/*
 * @Author: wenyu_zxb
 * @Date: 2021-03-02 00:07:47
 * @LastEditTime: 2021-03-02 13:50:56
 * @LastEditors: wenyu_zxb
 * @Description:webpack 配置typescript打包配置信息
 * @FilePath: /TypeScript/ts-webpack/webpack.config.js
 */

// 导入path包
const path = require('path')
// 导入html - webpack - plugin插件
const HTMLWebpackPlugin = require('html-webpack-plugin')
// 导入clean-webpack-plugin插件，用于清楚dist包内资源
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  // 配置入口信息
  entry: path.resolve(__dirname, 'src/index.ts'),
  // 配置打包信息
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'boundle.js',
    // 配置webpack不使用箭头函数
    environment: {
      arrowFunction: false
    }
  },
  // 配置打包模块，针对loader
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'babel-loader',
            // 配置babel
            options: {
              // 设置预定义环境
              presets: [
                [
                  // 配置预设浏览器环境
                  '@babel/preset-env',
                  {
                    // 要兼容的目标浏览器版本
                    targets: {
                      chrome: '80'
                      // ie: '11'
                    },
                    // 制定corejs版本
                    corejs: '3',
                    // 使用corejs的方式 usage表示按需加载
                    useBuiltIns: 'usage'
                  }
                ]
              ]
            }
          },
          'ts-loader'
        ]
      }
    ]
  },
  // 使用html-webpack-plugin插件
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      // 配置html模板文件
      template: path.resolve(__dirname, 'src/index.html')
    })
  ],
  // 设置引用模块
  resolve: {
    extensions: ['.ts', '.js']
  }
}
