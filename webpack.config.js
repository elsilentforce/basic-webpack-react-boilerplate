const path = require('path')
const webpack = require('webpack')
const PRODUCTION = process.env.NODE_ENV === 'production'

const plugins =
  PRODUCTION ?
  [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ] : []

module.exports = {
  devtool: PRODUCTION ? false : 'cheap-module-eval-source-map',
  entry: [
    './main', // Your appʼs entry point
  ],
  output: {
    path: path.join(__dirname, 'output', 'js'),
    filename: 'react-app.js',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react'],
      },
      exclude: /(node_modules|bower_components)/,
    }],
  },
}
