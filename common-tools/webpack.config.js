// 导入path包
const path = require('path')
// 导入html - webpack - plugin插件
const HTMLWebpackPlugin = require('html-webpack-plugin')
// 导入clean-webpack-plugin插件，用于清楚dist包内资源
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, 'src/main.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    // filename: 'boundle.js',
    environment: {
      arrowFunction: false,
      const: false
    }
  },
  // 配置打包模块，针对loader
  module: {
    rules: [
      {
        test: /\.js$/,
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
          }
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
    extensions: ['.js']
  },
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 20000,
      minRemainingSize: 0,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
          filename: '[name].bundle.js'
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
}
