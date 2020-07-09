## css 布局

### 布局分类

固定宽度：一般960/1000/1024 px

不固定宽度：主要靠文档流的原理

**第三种布局**

响应式布局

意思是 pc 上固定宽度，手机端不固定宽度

也就是一种混合布局

### float 布局

**步骤**

子元素上加 `float:left;`和width

==在父元素上加 .clearfix==

```css
.clearfix{
    content: '';
    display: block;
    clear: both;
}
```

![float](D:\jirengu\notes\images\float.jpg)

>图片不能上下居中   vertical-align:top/middle
>
>平均布局，加一层div   设置负margin

### flex 布局

#### 容器 container

![container](D:\jirengu\notes\images\container.jpg)

**让一个容器变成 container**

```css
.container{
    display: flex   /* inline-flex */
}
```

**改变items留动方向**

```css
.container{
    flex-direction: row | row reverse | column | column reverse
}
```

**改变折行**

```css
.container{
    flex-wrap: nowarp | warp | warp | warp-reverse
}
```

**主轴对其方式**

```css
justify-content: flex-start | flex-end | center | space-between
                space-around | space-evenly
```

**次轴对齐**

![cizhou](D:\jirengu\notes\images\cizhou.jpg)

**多行内容**（很少用）

![duohang](D:\jirengu\notes\images\duohang.jpg)

#### flex    item 属性

**item 加 order**

改变现实顺序



**item 上面加上 flex-grow**

<img src="D:\jirengu\notes\images\fat.jpg" alt="fat" style="zoom:67%;" />



**flex-shrink  控制如何变瘦**

一般写 flex-shrink ：0  防止变瘦 ，默认是 1 

**flex-basis   控制基准宽度**

默认是auto

**align-self  **

可以改变特定一个

### grid 布局

**成为 container**

<img src="D:\jirengu\notes\images\grid-c.jpg" alt="grid-c" style="zoom:80%;" />



**行和列**

<img src="D:\jirengu\notes\images\hanglie.jpg" alt="hanglie" style="zoom: 80%;" />



**另一种单位**



![fr](D:\jirengu\notes\images\fr.jpg)





**分区 grid-template-areas**

![20200608203924](D:\jirengu\notes\images\20200608203924.jpg)



**空隙 gap**

<img src="D:\jirengu\notes\images\gap.jpg" alt="gap" style="zoom:80%;" />