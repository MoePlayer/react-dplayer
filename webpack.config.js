const path = require('path')
  , rootPath = path.resolve(__dirname)
  , srcPath = path.resolve(rootPath, 'src')
  , pkg = require('./package.json')
  , libraryName = 'ReactDPlayer'
  , _ = require('lodash')
  , webpack = require('webpack')
  , ExtractTextPlugin = require('extract-text-webpack-plugin');

const baseWebpackConfig = {
  output: {
    path: path.resolve(rootPath, 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].js',
    library: libraryName,
    libraryTarget: 'umd'
  },
  externals: {
    [`react`]: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
    [`dplayer`]: "DPlayer",
    [`dplayer/dist/DPlayer.min.css`]: "null",
  },
  devtool: '#sourcemap',
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', '.json'],
    enforceExtension: false
  },
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
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].css',
      disable: false,
      allChunks: true,
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.BannerPlugin(
      `${ pkg.name} v${pkg.version}

Copyright 2017-present, MoePlayer, Inc.
All rights reserved.`)
  ],
};
const createWebpackConfig = function (config) {
  return _.assign({}, baseWebpackConfig, config)
}

const minWebpackConfig = createWebpackConfig({
  entry: {
    [`${pkg.name}.min`]: path.resolve(srcPath, 'index.js')
  },
  plugins: baseWebpackConfig.plugins.concat([
    new webpack.optimize.UglifyJsPlugin({
      output: {
        ascii_only: true
      },
      sourceMap: true,
      comments: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
  ])
})
const uncompressedWebpackConfig = createWebpackConfig({
  entry: {
    [`${pkg.name}`]: path.resolve(srcPath, 'index.js')
  },
  plugins: baseWebpackConfig.plugins.concat([
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
  ])
})

module.exports = [minWebpackConfig, uncompressedWebpackConfig];
