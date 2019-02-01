// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueCookie from 'vue-cookie'
import store from './store'
import iView from 'iview'
import './global_components' // 引入全局组件
import 'iview/dist/styles/iview.css' // 引入iView样式

Vue.config.productionTip = false
Vue.use(iView)
Vue.use(VueCookie)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
