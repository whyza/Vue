import Vue from 'vue'
import App from './App'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vuex from 'vuex'
Vue.use(Vuex)
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.use(Antd)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})
