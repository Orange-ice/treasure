## computed 和 watch

### computed - 计算属性

computed看上去是方法，但是实际上是计算属性，它会根据你所依赖的数据动态显示新的计算结果。计算结果会被缓存，computed的值在getter执行后是会缓存的，只有在它依赖的属性值改变之后，下一次获取computed的值时才会重新调用对应的getter来计算。

### watch - 监听

watcher 更像是一个 data 的数据监听回调，当依赖的 data 的数据变化，执行回调，在方法中会传入 newVal 和 oldVal。可以提供输入值无效，提供中间值 特场景。Vue 实例将会在实例化时调用 $watch()，遍历 watch 对象的每一个属性。如果你需要在某个数据变化时做一些事情，使用watch。

immediate  deep  

vm.$watch('xxx',fn,{deep: ...,immediate: ...})