## 57-webpack（上）

### webpack 转译 JS

**本地安装**

```bash
npm init -y
npm install webpack webpack-cli --save-dev
# 加 @ 可选择版本
```

**查看版本**

``` bash
npm info webpack version
```

**本地调用**

```bash
./node_modules/.bin/webpack
# or
npx webpack
```

### webpack 初始化配置

在 `webpack.config.js` 里设置  mode(切换模式) 

**entry和output**

```js
entry: './src/index.js',
    output: {
        filename: '[name].[contenthash].js'
    },
```

`[contenthash]` 可设置文件名hash  ，==http缓存用==



### webpack 插件自动生成 HTML

先安装对应插件

```bash
npm install --save-dev html-webpack-plugin
```

`webpack.config.js` 里 先引入

```js
const HtmlWebpackPlugin = require('html-webpack-plugin')
```

再在plugin 里配置

```js
plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack App",
            template: "src/assets/index.html"
        }),
    ],
```

> 将 plugins 里的title 应用到 template 里：在 template 里的title写上 `<%= htmlWebpackPlugin.options.title %>`



### webpack 里引入 CSS

先安装 loader

```bash
#css-loader
npm install --save-dev css-loader
#style-loader   在页面里生成<style>标签插入CSS
npm install --save-dev style-loader
```

在`js`文件引入css即可

```js
import './x.css'
```



### 使用 webpack-dev-server

安装

```bash
npm install --save-dev webpack-dev-server
```

在`webpack.config.js`中加入：

```js
devtool: 'inline-source-map',
devServer: {
    contentBase: './dist',
},
```

在 `package.json` 里的 `"scripts"`里添加：

```
"start": "webpack-dev-server --open",
```



### 使用插件提取CSS文件

安装

```bash
npm install --save-dev mini-css-extract-plugin
```

Example:

```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output
              publicPath: '../',
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
        ],
      },
    ],
  },
};
```



### 使用两个 webpack.config 文件

`package.json`里：

```json
"scripts": {
    "build": "rm -rf dist && webpack --config webpack.config.prod.js",
    "start": "webpack-dev-server --open"
  },
```

再创建两个文件`webpack.config.base.js`  ,  `webpack.config.prod.js`

公共部分`webpack.config.base.js`

开发 `webpack.config.js`

生产  `webpack.config.prod.js`

在开发和生产先引入：`const base = require('./webpack.config.base.js')`

公共部分   `...base`继承