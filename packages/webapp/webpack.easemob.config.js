const {wcf} = require('@systemlight/webpack-config')

module.exports = wcf({
  emitHtml: false,
  emitPublic: false,
  entryDefaultFileName: 'api/easemob.ts',
  buildConfigCallback(config) {
    config.devtool(false)

    config.output.filename('easemob.js')
    config.output.set('library', {
      name: 'Easemob',
      // https://webpack.js.org/configuration/output/#outputlibrarytype
      type: 'var',
      export: 'Easemob'
    })
  }
})
