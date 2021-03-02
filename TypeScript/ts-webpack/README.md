# webpack配置typescript

## setup

1. 创建项目目录
2. npm i -y 初始化项目配置文件
3. npm i -D webpack webpack-cli typescript ts-loader 安装webpack,webpack-cli,typescript核心包,ts-loader模块
4. npm i -D @babel/core @babel/preset-env babel-loader core-js 安装babel实现js转换
5. 创建tsconfig.json配置文件，配置typescript编译配置信息
6. 创建webpack.config.js配置文件，配置webpack项目打包信息
7. webpack配置信息：
   1. 导入path包
   2. 配置entry入口文件
   3. 配置output输出路径

      ```javascript
        // 配置打包信息
        output: {
          path: path.resolve(__dirname, 'dist'),
          filename: 'boundle.js'
        },
      ```

   4. 配置打包使用到到模块，即打包规则
      ```javascript
       // 配置打包模块，针对loader
        module: {
          rules: [
            {
              test: /\.ts$/,
              use: 'ts-loader'
            }
          ]
        },
      ```

   5. 配置打包使用插件
      1. html-webpack-plugin
      2. clean-webpack-plugin

      ```javascript
         // 使用html-webpack-plugin插件
        plugins: [
          new CleanWebpackPlugin(),
          new HTMLWebpackPlugin({
            // 配置html模板文件
            template: path.resolve(__dirname, 'src/index.html')
          })
        ],
      ```
   6. 配置模块引入规范
       ```javascript
        // 设置引用模块
        resolve: {
          extensions: ['.ts', '.js']
        }
       ```
## 常用插件

-  clean-webpack-plugin
-  html-webpack-plugin
