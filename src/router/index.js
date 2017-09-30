import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Hello from '../components/Hello'
import First from '../components/firstcomponent'
export default new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component: Hello
    // },
    // {
    //   path: '/aaa',
    //   name: 'First',
    //   component: First
    // }
    { path: '/', component: Hello },
    { path: '/aaa', component: First }
  ]
})
