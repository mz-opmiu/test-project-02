const path = require('path')
const webpack = require('webpack')
const PrerenderSpaPlugin = require('prerender-spa-plugin')

const productionPlugins = [
  new PrerenderSpaPlugin({
    staticDir: path.join(__dirname, 'dist'),
    routes: ['/event01'],
    renderer: new PrerenderSpaPlugin.PuppeteerRenderer({
      renderAfterElementExists: '#app'
    })
  })
]

module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        data: `
                @import '@/scss/_global.scss';
              `
      }
    }
  },
  configureWebpack: config => {
    // 공통환경
    config.resolve.extensions['.js']
    config.resolve.alias[{ jquery: 'jquery/dist/jquery.js' }]
    config.plugins = [
      ...config.plugins,
      new webpack.ProvidePlugin({
        $: 'jquery',
        jquery: 'jquery',
        'window.jQuery': 'jquery',
        jQuery: 'jquery'
      })
    ]
    if (process.env.NODE_ENV === 'production') {
      // 운영환경일때
      config.plugins.push(...productionPlugins)
    } else {
      // 기타환경 (ex: 개발,테스트..)
    }
  }
}
