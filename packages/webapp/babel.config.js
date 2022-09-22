module.exports = function (api) {
  api.assertVersion('^7.15')
  api.cache(true)

  const packageJson = require('./package.json')
  const allDependencies = {
    ...packageJson.dependencies,
    ...packageJson.devDependencies
  }

  let corejs = {
    version: 3,
    proposals: true
  }

  let presets = [
    [
      '@babel/preset-env', // 可简写：@babel/env
      {
        debug: false,
        modules: false,
        useBuiltIns: 'usage',
        ignoreBrowserslistConfig: false,
        corejs: corejs
      }
    ]
  ]

  let plugins = [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: corejs
      }
    ]
  ]

  if (Object.keys(allDependencies).includes('react')) {
    // https://babeljs.io/docs/en/babel-preset-react
    presets.push(['@babel/preset-react', {}])
  }

  /**
   * 配置项：https://babel.docschina.org/docs/en/options/
   *
   * 先执行完所有 Plugin，再执行 Preset。
   * 多个 Plugin，按照声明次序顺序执行。
   * 多个 Preset，按照声明次序逆序执行。
   */
  return {
    comments: true,
    presets: presets,
    plugins: plugins
  }
}
