import Vue from 'vue'
import Bugsnag, { Plugin } from '@bugsnag/js'
import BugsnagPluginVue from '@bugsnag/plugin-vue'

Bugsnag.start({
  apiKey: 'b03f578479a46c5628b9a8c8d4e927ac',
  plugins: [<Plugin> new BugsnagPluginVue()],
  enabledReleaseStages: ['production']
})

// eslint-disable-next-line no-unused-expressions
Bugsnag.getPlugin('vue')?.installVueErrorHandler(Vue)
