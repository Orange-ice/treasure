## CSS

### 语法

1. 样式语法

   ```
   选择器 {
       属性名: 属性值;
       /*注释*/
   }
   ```

2. at 语法

   ```
   @charset "UTF-8";
   @import url(2.css);
   @media (min-width: 100px) and max-width: 200px{
       语法一
   }
   ```



### 文档流

**流动方向**

inline 元素从左到右，到达最右边才会换行

block 元素从上到下，每一个都另起一行

inline-block 也是从左到右，  到达最后时不会把自己分为两行

**宽度**

inline 宽度为内部 inline 元素的和，不能用 width 指定

block 默认自动计算宽度，可用 width 指定

inline-block 结合前两者特点，可用 width

**高度**

inline 高度由 line-height 间接确定，跟 height 无关

block 高度由内部文档流元素决定，可以设 height

inline-block 跟 block 类似，可以设置 height

### overflow  溢出

**当内容大于容器**

等内容的宽度或高度大于容器的，会溢出

可用 overflow 来设置是否显示滚动条

auto 是灵活设置

scroll 是永远显示

hidden 是直接隐藏溢出部分

visible 是直接显示溢出部分

overflow 可以分为 overflow-x 和 overflow-y

### 脱离文档流

`float`      `position: absolute / fixed`

### 盒模型

- content-box 内容盒 - 内容就是盒子的边界
- border-box 边框盒 - 边框才是盒子的边界

**公式**

- content-box width = 内容宽度
- border-box width = 内容宽度 + padding + border

### margin 合并

**哪些元素会合并**   （合并只在上下）

父子 margin 合并       兄弟 margin  合并

**如何阻止合并**

父子合并用 padding / border 挡住

父子合并用 overflow: hidden 挡住

父子合并用  display: flex，不知道为什么

兄弟合并是符合预期的

兄弟合并可以用 inline-block 消除

### 基本单位

#### 长度单位

px 像素

em 相对于自身 font-size 的倍数

百分数

整数

rem：等你把 em 滚瓜烂熟了再问 rem

vw 和 vh

#### 颜色

十六进制 #FF6600 或者 #F60

RGBA 颜色 rgb(0,0,0) 或者 rgba(0,0,0,1)

hsl 颜色 hsl(360,100%,100%)

