import path from 'path'
import { defineConfig } from 'cypress'
import { build } from 'vite'

function vitePreprocessor(): (file: Cypress.FileObject) => Promise<string> {
  return async (file) => {
    const { outputPath, filePath } = file
    const fileName = path.basename(outputPath)
    const filenameWithoutExtension = path.basename(outputPath, path.extname(outputPath))

    await build({
      logLevel: 'warn',
      define: {
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      },
      build: {
        emptyOutDir: false,
        minify: false,
        outDir: path.dirname(outputPath),
        sourcemap: true,
        write: true,
        watch: null,
        lib: {
          entry: filePath,
          fileName: () => fileName,
          formats: ['umd'],
          name: filenameWithoutExtension,
        },
        rollupOptions: {
          output: {
            manualChunks: undefined,
          },
        },
      },
    })

    return outputPath
  }
}

export default defineConfig({
  projectId: '8ur76k',
  e2e: {
    specPattern: 'cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}',
    baseUrl: 'http://localhost:4173',
    setupNodeEvents(on) {
      on('file:preprocessor', vitePreprocessor())
    },
  },
})
