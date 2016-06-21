// Child
var Child = Vue.extend({
  template: '<div>child component</div>',
});

// Parent
var Parent = Vue.extend({
  template: '<div>parent component <Child></Child> </div>',
  components: {
    'Child': Child
  }
});

// register
Vue.component('parent-component',Parent);

new Vue({
  el: '#example'
});

