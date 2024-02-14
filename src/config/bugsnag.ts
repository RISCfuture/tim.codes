import Bugsnag, { type Plugin } from '@bugsnag/js'
import BugsnagPluginVue from '@bugsnag/plugin-vue'
import BugsnagPerformance from '@bugsnag/browser-performance'

Bugsnag.start({
  apiKey: 'b03f578479a46c5628b9a8c8d4e927ac',
  plugins: [<Plugin>new BugsnagPluginVue()],
  enabledReleaseStages: ['production']
})
BugsnagPerformance.start({ apiKey: 'b03f578479a46c5628b9a8c8d4e927ac' })

const bugsnagVue = Bugsnag.getPlugin('vue')
export default bugsnagVue
