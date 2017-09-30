// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import App2 from './App'
import router from './router'

Vue.config.productionTip = false
// 定义一个被命名为 todo-item 的新组件
Vue.component('todo-item', {
  // todo-item 组件现在接受一个 "prop"，
  // 类似于一个自定义属性。
  // 此 prop 名为 todo。
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})
Vue.component('todo-item2', {
  template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">X</button>\
    </li>\
  ',
  props: ['title']
})
var data = { counter: 0 }
Vue.component('simple-counter', {
  template: '<button v-on:click="counter += 1">{{ counter }}</button>',
  // 技术上 data 的确是一个函数了，因此 Vue 不会警告，
  data: function () {
    return {
      counter: 0
    }
  }
})
Vue.component('child', {
  // 声明 props
  props: ['myMessage'],
  // 就像 data 一样，prop 可以用在模板内
  // 同样也可以在 vm 实例中像“this.message”这样使用
  template: '<span>{{ myMessage }}</span>'
})
Vue.component('button-counter', {
  template: '<button v-on:click="incrementCounter">{{ counter }}</button>',
  data: function () {
    return {
      counter: 0
    }
  },
  methods: {
    incrementCounter: function () {
      this.counter += 1
      this.$emit('increment')
    }
  }
})

/* eslint-disable no-new */
// new Vue({
//   el: '#indexapp',
//   router,
//   template: '<div><App2/></div>',
//   components: {App2}
// })

new Vue({
  // el: '#indexapp',
  router,
  render: h => h(App2)
}).$mount('#indexapp')
