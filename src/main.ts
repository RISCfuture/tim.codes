import bugsnagVue from '@/config/bugsnag'

import '@/assets/fonts/TitilliumWeb-Regular.ttf'
import '@/assets/fonts/TitilliumWeb-Italic.ttf'
import '@/assets/fonts/TitilliumWeb-SemiBold.ttf'
import '@/assets/fonts/TitilliumWeb-SemiBoldItalic.ttf'
import '@/assets/fonts/TitilliumWeb-Bold.ttf'
import '@/assets/fonts/Inter-Bold-slnt=0.ttf'
import '@/assets/fonts/Inter-Light-slnt=0.ttf'

import 'normalize.css/normalize.css'
import '@/assets/styles/fonts.scss'
import '@/assets/styles/layout.scss'
import '@/assets/styles/transitions.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import i18n from '@/i18n'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
if (bugsnagVue) app.use(bugsnagVue)

app.mount('#app')
