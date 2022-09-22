const {wcf} = require('@systemlight/webpack-config')

module.exports = wcf({
  enableMinimize: 'auto',
  enableBabel: 'auto',
  enableSplitChunk: 'auto',
  enableHash: true,
  enablePostcss: true, // 为了让tailwindcss起效果
  enableMock: false, // 启用mock数据服务
  emitCss: 'auto',
  define: {
    __VUE_OPTIONS_API__: true
  },
  buildConfigCallback(config, self) {
    config.devServer
      .port(5600)
      .set('open', [`http://localhost:${config.devServer.get('port')}/`])

    // 使用vue3实验特性
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(() => ({
        reactivityTransform: true
      }))

    config.when(
      self.isStartSever,
      (_config) => {
        _config.plugin('FriendlyErrorsWebpackPlugin')
          .tap((options) => {
            options[0].compilationSuccessInfo.messages = [
              `You application is running here http://localhost:${config.devServer.get('port')}`
            ]
            return options
          })
      }
    )
  }
})
