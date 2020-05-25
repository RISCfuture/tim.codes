import Vue from 'vue'

import './config/bugsnag'

import i18n from './i18n'
import router from './router'
import store from './store'

import App from './App.vue'

import '@/assets/fonts/TitilliumWeb-Regular.ttf'
import '@/assets/fonts/TitilliumWeb-Italic.ttf'
import '@/assets/fonts/TitilliumWeb-SemiBold.ttf'
import '@/assets/fonts/TitilliumWeb-SemiBoldItalic.ttf'
import '@/assets/fonts/TitilliumWeb-Bold.ttf'
import '@/assets/fonts/Inter-Bold-slnt=0.ttf'
import '@/assets/fonts/Inter-Light-slnt=0.ttf'

import 'normalize.css/normalize.css'
import '@/assets/fonts.scss'
import '@/assets/layout.scss'

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
