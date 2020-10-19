import Vue from 'vue'
import App from './App.vue'

import cardTabs from '../packages/index'
Vue.use(cardTabs)

// 将自动注册所有组件为全局组件
import dataV from '@jiaminghi/data-view'
Vue.use(dataV)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
