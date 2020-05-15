import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router);

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      component: Home,
      name: 'home',
      redirect:'/homePage',
      children:[
        {
          path: '/homePage',
          name: '公司首页',
          component: resolve => require(['../views/pages/homePage.vue'], resolve),
        },
        {
          path: '/introduce',
          name: '公司介绍',
          component: resolve => require(['../views/pages/introduce.vue'], resolve),
        },
        {
          path: '/product',
          name: '公司产品',
          component: resolve => require(['../views/pages/product.vue'], resolve),
        },
        {
          path: '/joinUs',
          name: '加入我们',
          component: resolve => require(['../views/pages/joinUs.vue'], resolve),
        },
      ]
    },

  ]
})
