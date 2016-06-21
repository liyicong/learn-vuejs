// Vue.component('my-component',{
//   template: '<div>A custom component!</div>'
// });


var Parent = Vue.extend({
  template: '<my-component></my-component>',
  components: {
    'my-component': {
      template: '<div>A custom component!</div>'
    }
  }
});

Vue.component('parent-component',Parent);

new Vue({
  el: '#example',
});

