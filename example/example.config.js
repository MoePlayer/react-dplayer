const path = require('path')
  , rootPath = path.resolve(__dirname, '../')
  , srcPath = path.resolve(rootPath, 'example')
  , webpack = require('webpack')
  , ExtractTextPlugin = require('extract-text-webpack-plugin')
  , HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    bundle: ["babel-polyfill", path.resolve(srcPath, 'example.js')]
  },
  devServer: {
    https: false,
    disableHostCheck: true,
    contentBase: srcPath,
    historyApiFallback: true,
    hot: true,
    port: 8080,
    publicPath: '',
    noInfo: true,
    quiet: false,
    compress: false,
    stats: {colors: true},
  },
  output: {
    path: path.resolve(srcPath, '__BUILD__'),
    filename: '[name].js',
    publicPath: ''
  },
  devtool: 'cheap-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(srcPath, 'index.html')
    }),
    new ExtractTextPlugin({
      filename: '[name].css',
      disable: false,
      allChunks: true,
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
        }]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        })
      }
    ],
  }
}