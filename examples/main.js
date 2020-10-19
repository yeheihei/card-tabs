import Vue from 'vue'
import App from './App.vue'

import cardTabs from '../packages/index'
Vue.use(cardTabs)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
