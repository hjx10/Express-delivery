const {wcf} = require('@systemlight/webpack-config')

module.exports = wcf({
  enableFriendly: false,
  enablePostcss: true,
  skipCheckBabel: true,
  buildConfigCallback(config) {
    config.devServer
      .port(5800)
      .set('open', ['http://localhost:5800/'])
  }
})
