// 注册子组件
// 将当前消息派发出去
Vue.component('child', {
  template: '#child-template',
  data: function () {
    return { msg: 'hello' }
  },
  methods: {
    notify: function () {
      if(this.msg.trim()) {
        this.$dispatch('child-msg', this.msg);
        this.msg = '';
      }
    }
  }
});

// 初始化父组件
// 将收到消息时将事件推入一个数组
var parent = new Vue({
  el: '#events-example',
  data: {
    message: []
  },
  methods: {
    handleIt: function (msg) {
        this.message.push(msg);
    }
  }
})