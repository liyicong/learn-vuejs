Vue.component('child',{
  props: ['msg'],
  template: '<span> {{ msg }} </span>'
});

new Vue({
  el: '#example'
})