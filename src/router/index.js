import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index.vue'
import Home from '@/components/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
})
