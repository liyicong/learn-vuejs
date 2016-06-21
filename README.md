# learn-vuejs

**example1** 全局组册
> 用 `Vue.extend()` 创建一个组件构造器 
> 用 `Vue.component(tag, constructor)` 注册这个构造器用作组件

**example2** 局部注册
> 让组件在其它组件内注册，用实例选项 `components` 注册

**example3** 注册语法糖
> 可以直接传入选项对象而不是构造器给 `Vue.component()` 和 `components` 选项。Vue.js 在背后自动调用 `Vue.extend()`

