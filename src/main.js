// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import 'lib-flexible'
import Toast from 'vue-toast-component';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import preview from 'vue-photo-preview';
import 'vue-photo-preview/dist/skin.css';
import 'lib-flexible';
import 'babel-polyfill';

let options = {
  fullscreenEl: false
};
Vue.use(preview, options);
Vue.use(preview);

// import swiper style
import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper);
Vue.config.productionTip = false;


Vue.use(Toast);
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(Vuex);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});

// 跳转后返回顶部
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
})
