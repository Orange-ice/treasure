## JavaScript 编程接口

### JS 用 document 操作网页   （文档对象模型）

#### 获取元素，也叫标签

API

```
window.idxxx   或者直接  idxxx
document.getElementById('idxxx')
document.getElementsByTagName('div')[0]
document.getElementsByClassName('.red')[0]

document.querySelector('#idxxx')
document.querySelectorAll('.red')[0]
```



#### 获取特定元素

```js
document.documentElement     // 获取 html 元素
document..head          //获取 head 元素
document.body            // 获取 body 元素
window                  // 获取窗口

document.all             //获取所有元素
//这个 document.all 是个奇葩，在 非IE浏览器 为 假值，第6个 falsy 值
```



### div 完整原型链

![image-20200620222610682](https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200620222617.png)



### 节点Node

#### 类型

- 1 表示元素 Element 	，也叫标签 Tag
- 3 表示文本 Text
- 8 表示注释 Comment
- 9 表示文档 document
- 11 表示文档片段 DocumentFragment



#### 节点的增删改查---增

<img src="https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200620223018.png" alt="image-20200620223018207" style="zoom:67%;" />

![image-20200620223043094](https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200620223043.png)





<img src="https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200620223148.png" alt="image-20200620223148746" style="zoom:67%;" />

​                         答案：2里面



#### 删

![image-20200620223241693](https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200620223241.png)

#### 改

<img src="https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200620223321.png" alt="image-20200620223321407" style="zoom:50%;" />![image-20200620223337628](https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200620223337.png)

<img src="https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200620223321.png" alt="image-20200620223321407" style="zoom:50%;" />![image-20200620223337628](https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200620223337.png)![image-20200620223352284](https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200620223352.png)

<img src="https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200620223321.png" alt="image-20200620223321407" style="zoom:50%;" />![image-20200620223337628](https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200620223337.png)![image-20200620223352284](https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200620223352.png)

#### 查

<img src="https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200620223439.png" alt="image-20200620223439679" style="zoom:50%;" />![image-20200620223454668](https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200620223454.png)

<img src="https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200620223439.png" alt="image-20200620223439679" style="zoom:50%;" />![image-20200620223454668](https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200620223454.png)![image-20200620223513084](https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200620223513.png)



<img src="https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200620223543.png" alt="image-20200620223543402" style="zoom:50%;" />

### DOM 操作是跨线程的

<img src="https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200620223620.png" alt="image-20200620223620879" style="zoom:80%;" />

![image-20200620223645195](https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200620223645.png)



<img src="https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200620223712.png" alt="image-20200620223712236" style="zoom:67%;" />



![image-20200620223738658](https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200620223738.png)



![image-20200620223750811](https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200620223751.png)