import eslint from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginVitest from '@vitest/eslint-plugin'

export default tseslint.config(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**', '.yarn/**', '.pnp.*'],
  },

  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  ...pluginVue.configs['flat/strongly-recommended'],

  // Type-checked config
  {
    name: 'app/type-aware',
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        extraFileExtensions: ['.vue'],
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: 'off',
    },
  },

  // Vue files
  {
    name: 'app/vue',
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
      },
    },
    rules: {
      'vue/multi-word-component-names': 'off',
      '@typescript-eslint/unbound-method': 'off', // Vue composables (useI18n, useRouter, etc.) are safe to destructure
    },
  },

  // Config files — not covered by tsconfig
  {
    name: 'app/config-files',
    files: ['*.config.*'],
    extends: [tseslint.configs.disableTypeChecked],
  },

  // env.d.ts — type declaration file
  {
    name: 'app/env-dts',
    files: ['env.d.ts'],
    rules: {
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/triple-slash-reference': 'off',
    },
  },

  // Unit test files
  {
    name: 'app/tests',
    files: ['src/**/__tests__/**', 'src/**/*.spec.ts', 'vitest.setup.ts'],
    extends: [pluginVitest.configs.recommended],
    rules: {
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/unbound-method': 'off',
    },
  },

  // E2E test files
  {
    name: 'app/e2e',
    files: ['e2e/**/*.ts'],
    extends: [tseslint.configs.disableTypeChecked],
  },

  // Prettier must be last
  eslintConfigPrettier,
)
