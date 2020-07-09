## JavaScript

### 浏览器的功能

<img src="https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200611210328.png" alt="image-20200611210328193" style="zoom:67%;" />



###  JS 引擎

<img src="https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200611211043.png" alt="image-20200611211042932" style="zoom:67%;" />

### 执行 JS 代码

<img src="https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200611213247.png" alt="image-20200611213247781" style="zoom:50%;" />

**哪里的内存？     看内存图**

<img src="https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200611213342.png" alt="image-20200611213341967" style="zoom:67%;" />

<img src="https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200611213409.png" alt="image-20200611213409608" style="zoom: 50%;" />

![image-20200611213436547](https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200611213436.png)



<img src="https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200611213508.png" alt="image-20200611213508052" style="zoom:67%;" />





### 把 window 用内存图画出来

<img src="https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200611214810.png" alt="image-20200611214810069" style="zoom:67%;" />

<img src="https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200611214854.png" alt="image-20200611214853111" style="zoom:67%;" />

<img src="https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200611214917.png" alt="image-20200611214917572" style="zoom:67%;" />



### 内存图与 JS 世界

<img src="https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200611224105.png" alt="image-20200611224105873" style="zoom:80%;" />



### JS 语法

#### 1. 表达式和语句

##### 表达式

- 1+2表达式的`值`为3
- add(1,2) 表达式的值为函数的`返回值` （只有函数才有返回值）
- console.log 表达式的值为函数本身
- conlose.log(3)表达式的值为 undefined


##### 语句
JavaScript 程序的执行单位为行（line），也就是一行一行地执行。一般情况下，每一行就是一个语句。

语句（statement）是为了完成某种任务而进行的操作，比如下面就是一行赋值语句。
```js
var a =3 ;
```
##### 二者的区别
- 表达式一般都有值，语句可能有也可能没有
- 语句一般会改变环境（声明、赋值）
- 但上面两句也不绝对


#### 2.标识符
标识符（identifier）指的是用来识别各种值的合法名称。最常见的标识符就是变量名，以及函数名。JavaScript 语言的标识符对大小写敏感，所以a和A是两个不同的标识符。

##### 规则
- 第一个字符，可以是任意 Unicode 字母（包括英文字母和其他语言的字母），以及美元符号（$）和下划线（_）。
- 第二个字符及后面的字符，除了 Unicode 字母、美元符号和下划线，还可以用数字0-9。

**JS 有一些保留子，不能用作标识符：**

> arguments、break、case、catch、class、const、continue、debugger、default、delete、do、else、enum、eval、export、extends、false、finally、for、function、if、implements、import、in、instanceof、interface、let、new、null、package、private、protected、public、return、static、super、switch、this、throw、true、try、typeof、var、void、while、with、yield。

#### 3. if else 语句

语法：`if(表达式){语句1}else{语句2}`

`{}` 在语句只有一句的时候可以省略，但不建议这么做

```js
if (m === 3) {
  // 满足条件时，执行的语句
} else {
  // 不满足条件时，执行的语句
}
```

> if 只匹配最近的一条语句

```js
a=1
if(a ===2)
    console.log('a')
    console.log('a等于2')
```

#### 4. 循环语句 

##### while 循环

**语法**

- while(表达式){语句}
- 判断表达式的真假
- 当表达式为真，执行语句，执行完再判断表达式的真假
- 当表达式为假，执行后面的语句

##### for 循环

**语法**

- ```
    for(语句1;表达式2;语句3){
        循环体
    }
    ```
- 先执行语句1
- 然后判断表达式2
- 如果为真，执行循环体，然后执行语句3
- 如果为假，直接退出循环，执行后面的语句



#### 5.switch 语句

<img src="https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200613220133.png" alt="image-20200613220132913" style="zoom:67%;" />



#### 6. break 和 continue

退出所有循环 VS 退出当前一次循环

```js
var i = 0;

while(i < 100) {
  console.log('i 当前为：' + i);
  i++;
  if (i === 10) break;
}
```

上面代码只会执行10次循环，一旦i等于10，就会跳出循环。

```js
var i = 0;

while (i < 100){
  i++;
  if (i % 2 === 0) continue;
  console.log('i 当前为：' + i);
}
```

上面代码只有在i为奇数时，才会输出i的值。如果i为偶数，则直接进入下一轮循环。

#### 7.label

JavaScript 语言允许，语句的前面有标签（label），相当于定位符，用于跳转到程序的任意位置，标签的格式如下。

```js
label:
  语句
```

```js
    foo:{
        console.log(1);
        break foo;
        console.lig('本行不会输出')；
    }
    console.log(2);
```

```js
{
    foo:1
}
// 上面是一个label
```



#### ？：/ && /  ||  



![image-20200613220726848](https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200613220726.png)

![image-20200613220828031](https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200613220828.png)

![image-20200613220846766](https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200613220846.png)



### JS 数据类型

<img src="https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200613221246.png" alt="image-20200613221246612" style="zoom:50%;" />

#### 数字number （64位浮点数）



<img src="https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200613221404.png" alt="image-20200613221404455" style="zoom:50%;" />

<img src="https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200613221428.png" alt="image-20200613221428693" style="zoom: 80%;" />![image-20200613221504255](https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200613221504.png)

<img src="https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200613221428.png" alt="image-20200613221428693"  />

![](https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200613221641.png)





<img src="https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200613221714.png" alt="image-20200613221714469" style="zoom:80%;" />



#### 字符串string（每个字符两个字节）

单引号  双引号 反引号

<img src="https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200613221841.png" alt="image-20200613221841264" style="zoom:80%;" />



![image-20200613221859874](https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200613221859.png)



#### 布尔boolean

只有两个值 `true` 或 `false`

否定运算，相等运算，比较运算会得到布尔值

==五个falsy值==：  `undefined`    `null`    `0`   `NAN`    `''`

falsy就是相当于false 但又不是 false的值。



#### 变量声明

<img src="https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200613222305.png" alt="image-20200613222305289" style="zoom:80%;" />

const 和 let 几乎一样，只有一条不一样：**声明时就要赋值，赋值后不能改。**

#### 类型转换

<img src="https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200613222435.png" alt="image-20200613222435390" style="zoom:80%;" />



### JS 对象基本用法

#### 声明对象

```js
let obj = {'name':'frank','age':18}

let obj = new Object({'name':'xiaoming'})
```
<br>

**细节**

- 键名是字符串，不是标识符，可以包含任意字符
- 引号可以省略，省略之后就只能写标识符
- `就算引号省略了，键名也还是字符串`

*属性名*：每个key都是对象的属性名（property）
*属性值*：每个value都是对象的属性值

**`Object.keys(obj)`可以得到obj的所有key**

<br>

**`变量`作属性名**

```js
let p1 = 'name'
let obj = {p1:'frank'}   //属性名为'p1'

let obj = {[p1]:'frank'}    //属性名为'name'
```

**对比**

- 不加[]的属性名会自动变成字符串
- 加了[]则会当作变量求值
- 值如果不是字符串，则会自动变成字符串

<br>

**对象的隐藏属性**

- JS 中每一个对象都有一个隐藏属性
- 这个隐藏属性储存着其共有属性组成的对象的地址
- 这个共有属性组成的对象叫做原型
- 也就是说，隐藏属性储存着原型的地址

#### 删除对象属性

`delete obj.xxx 或 delete obj['xxx']`  即可删除 obj 的 xxx 属性

```js
'xxx' in obj === false    //不含属性名

'xxx' in obj && obj.xxx === undefined   // 含有属性名，但是值为 undefined

// ！！！注意：

obj.xxx === undefined    //不能断定 'xxx' 是否为 obj 的属性

```

#### 查看对象属性

`Object.keys(obj)`   查看自身所有属性

`console.dir(obj) 或者自己依次用 Object.keys 打印出 obj.__proto__`  查看自身+共有属性

`obj.hasOwnProperty('toString')`   判断一个属性是自身的还是共有的


**原型**

*每个对象都有原型*

- 原型里存着对象的共有属性
- 比如 obj 的原型就是一个对象
- `obj.__proto__ `存着这个对象的地址
- 这个对象里有 toString / constructor / valueOf 等属性

**对象的原型也是对象**

- 所以对象的原型也有原型
- obj = {} 的原型即为所有对象的原型
- 这个原型包含所有对象的共有属性，是对象的根
- 这个原型也有原型，是 null

**两种方法查看属性**

`中括号语法：obj['key']`    

`点语法：obj.key`

#### 修改或增加对象属性

*直接赋值*

```js
let obj = {name: 'frank'} // name 是字符串
obj.name = 'frank' // name 是字符串
obj['name'] = 'frank' 
obj[name] = 'frank' // 错，因 name 值不确定
obj['na'+'me'] = 'frank'
let key = 'name'; obj[key] = 'frank'
let key = 'name'; obj.key = 'frank' // 错
// 因为 obj.key 等价于 obj['key']
```

*批量赋值*

`Object.assign(obj, {age: 18, gender: 'man'})`

**无法通过自身修改或增加共有属性**

非要修改，也可以：`Object.prototype.toString = 'xxx'`   一般不推荐这么做

修改隐藏属性： `Object.create()`


#### 'name' in obj 和 obj.hasOwnProperty('name') 的区别

'name' in obj 不能检查'name'是自己的属性还是公共属性

obj.hasOwnProperty('name') 直接检查'name' 是不是obj自己的属性



### 数组对象

#### 创建数组

**新建**

```js
let arr = [1,2,3]
let arr = new Array(1,2,3)
let arr = new Array(3)
```

**转化**

```js
let arr = '1,2,3'.split(',')
let arr = '123'.split('')
Array.from('123')
```

**伪数组**

`let divList = document.querySelectorAll('div')`

伪数组的原型链中并没有数组的原型

> 没有数组共用属性的*数组*就是伪数组



**合并两个数组，得到新数组**

`arr1.concat(arr2)`

**截取一个数组的一部分**

`arr1.slice(1)`      从第二个元素开始

`arr1.slice(0)`      全部截取

> JS 只提供浅拷贝



#### 删除元素

**删除头部元素**

`arr.shift()`    arr 被修改，并返回被删元素

**删除尾部**

`arr.pop()`     arr 被修改，并返回被删元素

**删除中间**

`arr.splice(index,1)`      删除 index 的一个元素

`arr.splice(index,1,'x')`    并在删除位置添加 'x'

`arr.splice(index,1,'x'，'y') `     并在删除位置添加 'x','y'

#### 查看所有元素

`forEach`  

```js
arr.forEach(function(item,index){
    console.log(`${index}:${item}`)
})
```

**索引越界**

`arr[-1] === undefined`



**查看某个元素是否再数组里**

```js
arr,indexOf(item)  //存在返回索引，否则返回 -1
```

**使用条件查找元素**

```js
arr.find(item => item%2 === 0)  //查找第一个偶数
```

**使用条件查找元素的索引**

```js
arr.findIndex(item => item%2 === 0)
// 找第一个偶数的索引
```

#### 增加数组中的元素

**尾部添加**

```js
arr.push(newItem)  //修改arr ，返回新长度
arr.push(item1,item2) //修改arr ，返回新长度
```

**头部添加**

`unshift`

**中间添加**

```js
arr.splice(index,0,'x')  //在 index 处插入 'x'
arr,splice(index,0,'x','y')
```

#### 修改数组中的元素

**反转顺序**

`arr.reverse()`    修改原数组

**自定义顺序**

`sort`

#### 数组变换

`map`      `fliter`      `reduce`



### JS 运算符

#### 算数运算符

**number 运算**

- 加减乘除
- 余数   x % 7
- 指数  x ** 3
- 自增自减  x++ / ++x / x-- / --x      
- 求值运算符  +x
- 负数运算符  -x

**string 运算**

连接运算  '123' + '456'



> 尽量少用自增自减。
>
> 不同类型不要加起来



#### **比较运算符**

要使用 ===   ，不要使用 ==

> NaN !== NaN



#### 布尔运算符

**或且非**

- ||
- &&
- ！

**短路逻辑**



#### 二进制运算符

**或、与、否**

- |  两个位都为0，则结果为0，否则为1
- &
- ~

**异或**

^     两个位相同，则结果为0，否则为1

**左移和右移**

<< 和 >>

**头部补零的右移运算符**

`>>>`



##### 使用与位运算符判断奇偶

偶数 & 1 = 0

奇数 &1 = 1

##### 使用 ~~~，>>,<<,>>>,| 来取整

```js
console.log(~~ 6.86)     //6
console.log(6.86 >> 0)   //6
console.log(6.86 << 0)   //6
console.log(6.86 | 0)    //6
console.log(6.86 >>> 0)  //6
```

##### 使用 ^ 来交换 a 和 b 的值

```js
var a = 8
var b = 5
a ^= b
b ^= a
a ^= b
console.log(a)  //5
console.log(b)  //8
```

#### 其他运算符

- 点运算符
- void 运算符
- 逗号运算符

#### 运算符优先级

==圆括号() 优先级最高==