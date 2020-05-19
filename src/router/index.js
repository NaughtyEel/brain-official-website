import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router);

export default new Router({
  routes: [
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
        {
          path: '/mobile/biohazard-survival',
          component: resolve => require(['../views/pages/productInfos/mobile/biohazard-survival.vue'], resolve),
        },
        {
          path: '/mobile/jet-gun',
          component: resolve => require(['../views/pages/productInfos/mobile/jet-gun.vue'], resolve),
        },
        {
          path: '/mobile/prisoners-fled',
          component: resolve => require(['../views/pages/productInfos/mobile/prisoners-fled.vue'], resolve),
        },
        {
          path: '/mobile/street-combat',
          component: resolve => require(['../views/pages/productInfos/mobile/street-combat.vue'], resolve),
        },
        {
          path: '/mobile/unknow-battle',
          component: resolve => require(['../views/pages/productInfos/mobile/unknow-battle.vue'], resolve),
        },
        {
          path: '/tv/kong-fu-soccer',
          component: resolve => require(['../views/pages/productInfos/tv/kong-fu-soccer.vue'], resolve),
        },
        {
          path: '/tv/damao',
          component: resolve => require(['../views/pages/productInfos/tv/damao.vue'], resolve),
        },
        {
          path: '/tv/doudizhu',
          component: resolve => require(['../views/pages/productInfos/tv/doudizhu.vue'], resolve),
        },
        {
          path: '/tv/yuanbao',
          component: resolve => require(['../views/pages/productInfos/tv/yuanbao.vue'], resolve),
        },
        {
          path: '/tv/xiaolieren',
          component: resolve => require(['../views/pages/productInfos/tv/xiaolieren.vue'], resolve),
        },
        {
          path: '/tv/kebao',
          component: resolve => require(['../views/pages/productInfos/tv/kebao.vue'], resolve),
        },

      ]
    },

  ]
})
