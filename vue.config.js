const path = require('path')
const PrerenderSpaPlugin = require('prerender-spa-plugin')

const productionPlugins = [
  new PrerenderSpaPlugin({
    staticDir: path.join(__dirname, 'dist'),
    routes: ['/event01', '/event02'],
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
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(...productionPlugins)
    }
  }
}
