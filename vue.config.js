const path = require('path')

module.exports = {
  devServer: {
    open: true,
  },

  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, 'src/common/styles/index.less')],
    },
  },
}
