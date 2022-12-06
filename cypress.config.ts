import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: '8ur76k',
  fixturesFolder: 'cypress/fixtures',
  screenshotsFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://localhost:8080',
    specPattern: 'cypress/specs/**/*.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/index.js',
  },
})
