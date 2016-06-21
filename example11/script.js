Vue.directive('demo1',{
  // 指定一个特性列表
  params: ['a'],
  bind: function () {
    console.log('demo1: ' + this.params.a);
  }

})

Vue.directive('demo2', {
  params: ['a'],
  paramWatchers: {
    a: function (val, oldVal) {
      console.log('demo2: a changed!');
    }
  }
})

var demo = new Vue({
  el: '#example',
  data: {
    someValue: 'hello!'
  }
})