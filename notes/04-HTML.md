### HTML 概述

查资料  MDN

html  查错            npm   `node-w3c-validator`

vs code 插件          格式化工具  prettier

### HTML 标签

#### 标签全局属性 （所有标签都有的）

- class
- contenteditable             使元素在页面上变为可编辑的
- hidden                             让元素看不见
- id
- style
- tabindex                         0 最后        -1 永远不
- title

#### 默认样式

reset.css

#### 内容标签

- ol+li
- ul+li

- dl+dt+dd    描述列表
- pre              元素中的文本按 原文件的编排，以等宽字体的形式展现出来，空格、换行符也会显示出来
- code           显示代码
- hr                分隔线
- br
- a
- em             语气强调
- strong       内容本身的重要性
- quote        内联引用
- blockquote    块级引用

#### 重点标签

> 使用 http-server  /   parcel    打开html文件    ，通过npm  安装

##### a 标签

属性

- href       

  - 网址 `//google.com`

  - 路径

  - 伪协议        javascript:代码;     `<a href="javascript:alert（1）;">`    `<a href="javascript:;">`

    ​                   mailto:邮箱

    ​                   tel:手机         

- target

  - 内置名字
    - `_blank`    新的空白窗口打开
    - `_top`         顶层窗口打开
    - `_parent`    父级窗口打开
    - `_self`        默认的，在当前窗口打开

- download 

- rel=noopener

作用：跳转外部页面、跳转内部锚点、跳转到邮箱或电话等

##### table

相关标签：`table`  `thead`   `tbody`   `tfoot`       `tr`   `td`   `th`

相关的样式

- `table-layout`
- `boder-collapse`
- `boder-spacing`

##### img 标签

作用：发出 `get`请求，展示一张图片

属性：`alt` (图片加载失败时的提示文字)  `height`  `width`   `src` 

事件：`onload`     `onerror`      监听图片加载成功或失败

响应式：`max-width:100%`

##### form 标签

作用：发  `get`或`post`请求，然后刷新页面

属性

- action       请求地址
- autocomplete   是否自动填充
- method     请求方法（get/post）
- target      

事件：`onsubmit`

>  `button`标签里可以有任何东西，input里不可以

##### input 标签

作用：让用户输入内容

属性：

- 类型 type ：button / checkbox / email / file / hidden / number / password / radio / search / submit / tel / text
- 其他属性：name / autofocus / checked / disabled / malength / pattern / value / placeholder

事件： onchange / onfocus / onblur

验证器



**其他输入标签**

标签

- select + option
- textarea
- label

>  注意事项:
>
> - 一般不监听 input 的 click 事件
> - form 里面的 input 要有 name
> - form 里面要放一个 type=submit 才能触发 submit 事件

