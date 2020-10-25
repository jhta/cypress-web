const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: {
    app: ['@babel/polyfill', './src/app/index.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'App - Production',
      template: './src/app/index.html',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build'),
    environment: {
      arrowFunction: false,
      destructuring: false,
      module: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  corejs: { version: 3 },
                  useBuiltIns: 'entry',
                  targets: {
                    esmodules: true,
                    ie: '11',
                  },
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.less$/i,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
    ],
  },
}
