module.exports = function(api) {
  api.cache(false)
  const presets = [
    [
      '@babel/preset-env',
      {
        corejs: { version: 3 },
        useBuiltIns: 'usage',
        targets: {
          safari: '11.1',
          ie: '11',
          node: 'current',
        },
      },
    ],
  ]
  const plugins = [['@babel/transform-runtime']]
  return {
    presets,
    plugins,
  }
}
