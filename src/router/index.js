import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router);

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {//返回之前的原位置
    // savedPosition 当且仅当 popstate 导航 (通过浏览器的 前进/后退 按钮触发) 时才可用。
    return savedPosition
  } else {
    const position = {}
    if (to.hash) {//如果路径中有哈希值，就采用锚点定位
      position.selector = to.hash
    }
    if (to.matched.some(m => m.meta.scrollToTop)) {//如果路由元信息中存在参数，对参数做进一步判断（此示例代表滚动到顶部）
      position.x = 0
      position.y = 0
    }
    //如果返回一个 falsy (假的值)，或者是一个空对象，那么不会发生滚动。
    return position
  }
}

export default new Router({
  routes: [
    {
      mode: 'history',
      path: '/',
      component: Home,
      name: 'home',
      redirect:'/homePage',
      scrollBehavior,
      children:[
        {
          path: '/homePage',
          name: '公司首页',
          component: resolve => require(['../views/pages/homePage.vue'], resolve),
          meta: { scrollToTop: true }
        },
        {
          path: '/introduce',
          name: '公司介绍',
          component: resolve => require(['../views/pages/introduce.vue'], resolve),
          meta: { scrollToTop: true }
        },
        {
          path: '/product',
          name: '公司产品',
          component: resolve => require(['../views/pages/product.vue'], resolve),
          meta: { scrollToTop: true }
        },
        {
          path: '/joinUs',
          name: '加入我们',
          component: resolve => require(['../views/pages/joinUs.vue'], resolve),
          meta: { scrollToTop: true }
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
        {
          path: '/other/prevention-of-addiction',
          component: resolve => require(['../views/pages/productInfos/other/fangchenmi.vue'], resolve),
        },

      ]
    },

  ]
})
