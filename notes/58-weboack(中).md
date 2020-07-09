## 58-weboack(中)

### loader 和 plugin 区别？ ==面试题==

loader 是用来加载文件的，plugin是增强 webpack 功能的

loader 是用来加载各类文件，比如 可以把js文件转译成低版本浏览器可以支持的js，把css文件转成页面上的style标签或其他处理，可加载图片文件可以对图片优化，htmlwebpackplugin是用来生产html文件的，minicssextractplugin抽取css代码变成一个文件。

### 引入 SCSS

安装

```bash
npm install --save-dev sass-loader dart-sass
```

`webpack.config.base.js`配置：

```js
module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    {loader:'sass-loader',
                        options: {
                        implementation:require('dart-sass')
                        }
                    },
                ],
            },
        ],
    },
```

### 引入LESS和Stylus

**less**

安装

```bash
npm install --save-dev less-loader
```

`webpack.config.base.js`配置：

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.less$/,
        loader: ['style-loader', 'css-loader','less-loader']
      },
    ],
  },
};
```



**stylus**

安装

```bash
npm install stylus-loader stylus --save-dev
```

`webpack.config.base.js`配置：

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.styl$/,
        loader: ['style-loader', 'css-loader','stylus-loader']
      },
    ],
  },
};
```

### 使用 file-loader 引入图片

安装

```bash
npm install --save-dev file-loader
```

`webpack.config.base.js`配置：

```js
{
    test: /\.(png|svg|jpg|gif)$/,
    use: [
        'file-loader',
    ],
},
```

### webpack import() 懒加载

在`index.js`文件中

```js
const button = document.createElement('button')
button.innerText = '懒加载'
button.onclick = (module)=>{
    const promise = import('./lazy.js')  //import() 加载一个文件，会得到一个promise
    promise.then((module)=>{
        const fn = module.default
        fn()
    },()=>{})
}
div.appendChild(button)
```

### webpack 一键部署到 GitHub

将dist单独放到一个分支

写一个脚本快速执行

```sh
npm run build &&
git checkout gh-pages &&
rm -rf *.html *.js *.css *.png &&
mv dist/* ./ &&
rm -rf dist;
git add . &&
git commit -m "update" &&
git push &&
git checkout -
```

