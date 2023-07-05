/* eslint-disable no-param-reassign,@typescript-eslint/no-var-requires */

const StyleLintPlugin = require('stylelint-webpack-plugin')

module.exports = {
  lintOnSave: false,

  chainWebpack: config => {
    config.module.rule('vue').use('vue-svg-inline-loader').loader('vue-svg-inline-loader').options({
      /* ... */
    })
    if (process.env.NODE_ENV === 'development') {
      // safari dev fix: https://github.com/vuejs/vue-cli/issues/1132
      config.output.filename('[name].[hash].js').end()
    } else if (process.env.NODE_ENV === 'test') {
      // mochapack fix: https://github.com/vuejs/vue-cli/issues/4053
      const scssRule = config.module.rule('scss')
      scssRule.uses.clear()
      scssRule.use('null-loader').loader('null-loader')
    }
  },

  configureWebpack: {
    plugins: [
      new StyleLintPlugin({
        files: ['src/**/*.{vue,scss}']
      })
    ]
  }
}
