import { defineConfig } from 'cypress'
import vitePreprocessor from 'cypress-vite'

export default defineConfig({
  projectId: '8ur76k',
  e2e: {
    specPattern: 'cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}',
    baseUrl: 'http://localhost:4173',
    setupNodeEvents(on) {
      // Use default vite config - legacy plugin is disabled via CYPRESS env var
      on('file:preprocessor', vitePreprocessor())
    }
  }
})
