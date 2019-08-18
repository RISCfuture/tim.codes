module.exports = {
  root: true,

  env: {
    node: true
  },

  plugins: ['jasmine', 'cypress', 'chai-friendly'],

  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
    'plugin:jasmine/recommended',
    'plugin:cypress/recommended',
    'plugin:chai-friendly/recommended'
  ],

  parserOptions: {
    parser: '@typescript-eslint/parser', // the typescript-parser for eslint, instead of tslint
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: false
    }
  },

  rules: {
    '@typescript-eslint/consistent-type-assertions': ['error', { assertionStyle: 'angle-bracket' }],
    '@typescript-eslint/no-non-null-assertion': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'comma-dangle': ['error', 'never'],
    'import/order': ['error', { groups: ['builtin', 'external', 'parent', 'sibling', 'index'] }],
    'import/no-named-default': 'off',
    'jasmine/no-spec-dupes': 'off',
    semi: ['error', 'never'],
    'vue/script-indent': ['error', 2, { baseIndent: 1 }]
  },

  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        mocha: true
      }
    },
    {
      files: ['src/i18n/strings/**/*.ts'],
      rules: {
        '@typescript-eslint/camelcase': 'off'
      }
    },
    {
      files: ['*.vue'],
      rules: {
        indent: 'off'
      }
    }
  ]
}
