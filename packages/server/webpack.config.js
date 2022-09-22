const {wcf} = require('@systemlight/webpack-config')

module.exports = wcf({
  emitCss: false,
  emitHtml: false,
  skipCheckBabel: true,
  enableFriendly: false,
  buildConfigCallback(config) {
    config
      .target('node')
      .devtool(false)
      .output.filename('app.js')
  }
})
