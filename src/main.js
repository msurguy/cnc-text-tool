import './sass/bootstrap.scss'

import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import VueAxios from 'vue-axios'

import SvgIcon from 'vue-svgicon'
import VueAnalytics from 'vue-analytics'

Vue.config.productionTip = false

// Default tag name is 'svgicon'
Vue.use(SvgIcon, {
  tagName: 'svgicon'
})

Vue.use(VueAxios, axios)

Vue.use(VueAnalytics, {
  id: 'UA-167408902-2'
})

new Vue({
  render: h => h(App),
}).$mount('#app')
