## Vue 构造选项

### options 五大类

数据，DOM，生命周期钩子，资源，组合

### 入门属性

#### el-挂载点

可用 $mount 代替

```js
new Vue().$mount('#app')
```



#### data -==内部==数据 

支持对象和函数，优先用函数

data 用函数：组件的复用，每个组件 data 不同，防止不同组件修改数据时相互覆盖

#### methods-方法

事件处理函数或者是普通函数

#### components

Vue组件，注意大小写

优先使用`*.vue`文件引入方式

#### 四个钩子

created--实例出现在内存中

mounted--实例出现在页面中

updated--实例更新了

destroyed--实例从页面和内存中消亡了

#### props-==外部==数据

也叫属性

message="n"  传入字符串

:message="n" 传入 this.n

:fn="add" 传入 this.add 函数



