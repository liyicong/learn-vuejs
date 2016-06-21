Vue.directive('demo',function (value) {
  console.log(value.color);
  console.log(value.text);
})

var demo = new Vue({
  el: '#demo',
  data: {
    msg: 'hello!'
  }
})