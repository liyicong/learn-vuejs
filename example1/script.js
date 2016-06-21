var Mycomponent = Vue.extend({
  template: '<span>a custom component</span>',
});

Vue.component('my-component',Mycomponent);

var vm = new Vue({
  el: '#example'
})

