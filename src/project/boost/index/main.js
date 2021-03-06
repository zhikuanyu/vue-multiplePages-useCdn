import Vue from 'vue'

import App from './App'
import 'amfe-flexible'
// 解决移动端300ms点击穿透
import fastclick from 'fastclick'
fastclick.attach(document.body)

Vue.use({
  install(Vue) {
    Vue.component('customBtn', () => import('@/components/customBtn.vue'))
  }
})

import 'normalize.css/normalize.css'// A modern alternative to CSS resets
import '@/common/styles/common.less'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
