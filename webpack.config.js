const path = require('path');
const webpack = require('webpack');
const _ = require('lodash');

const pkg = require('./package.json')

const srcPath = path.resolve(__dirname, 'src');

const baseWebpackConfig = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].js',
    library: 'ReactDPlayer',
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
    [`dplayer/dist/DPlayer.min.css`]: "undefined",
  },
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
      }
    ],
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.BannerPlugin(
      `${pkg.name} v${pkg.version}

Copyright 2017-present, MoePlayer, Inc.
All rights reserved.`)
  ],
};
const createWebpackConfig = function (config) {
  return _.assign({}, baseWebpackConfig, config)
}

const minWebpackConfig = createWebpackConfig({
  mode: 'production',
  entry: {
    [`${pkg.name}.min`]: path.resolve(srcPath, 'index.js')
  },
  plugins: baseWebpackConfig.plugins.concat([
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
  ])
})
const uncompressedWebpackConfig = createWebpackConfig({
  mode: 'development',
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
