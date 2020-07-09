## Vue 数据响应式

### Object.defineProperty

可以给对象添加属性

可以给对象添加 getter/setter

getter/setter 用于对属性的读写进行监控



### 什么是代理

对 myData 对象的属性读写，全权由另一个对象 vm 负责

那么 vm 就是 myData 的代理（类比房东租房子） 

比如 myData.n 不用，偏偏要用 vm.n 来操作 myData.n 



### vm=new Vue({data:myData})

1. 会让 vm 成为 myData 的代理（proxy）
2. 会对 myData 的所有属性进行监控，当 myData 改变时，vm可以马上知道，并render(data)，更新视图界面



![image-20200708200227386](https://typorat.oss-cn-hangzhou.aliyuncs.com/jirengu/20200708200234.png)



### Vue.set 和 this.$set

**作用**

- 新增 key
- 自动创建代理和监听（如果没创建过）
- 触发UI更新（但并不会立刻更新）



数组采用 Vue 的 数组==变更方法==

