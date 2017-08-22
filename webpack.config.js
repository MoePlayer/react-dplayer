const path = require('path')
  , deepAssign = require('deep-assign')
  , rootPath = path.resolve(__dirname)
  , srcPath = path.resolve(rootPath, 'src')
  , pkg = require('./package.json')
  , libraryName = (function (str) {
  return str.split("-").map(function (c, i) {
    return i > 0 ? (c.charAt(0).toUpperCase() + c.substring(1)) : c;
  }).join('');
})(pkg.name)
  , webpack = require('atool-build/lib/webpack');

module.exports = function (webpackConfig) {
  webpackConfig.entry = {
    [`${pkg.name}.min`]: path.resolve(srcPath, 'index.js')
  }
  webpackConfig.externals = {
    [`react`]: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
    [`dplayer`]: "DPlayer",
    [`dplayer/dist/DPlayer.min.css`]: "null",
  };

  /**
   * remove commonjs
   */
  webpackConfig.plugins = webpackConfig.plugins.filter((plugin) => {
    const ret = !(plugin instanceof webpack.optimize.CommonsChunkPlugin);
    return ret;
  });
  webpackConfig.output.library = libraryName;
  webpackConfig.output.libraryTarget = 'umd';
  webpackConfig.plugins.push(new webpack.BannerPlugin(
    `${ pkg.name} v${pkg.version}

Copyright 2017-present, MoePlayer, Inc.
All rights reserved.`
  ));
  let uncompressedWebpackConfig = deepAssign({}, webpackConfig);
  uncompressedWebpackConfig.entry = {
    [`${pkg.name}`]: path.resolve(srcPath, 'index.js')
  }
  uncompressedWebpackConfig.plugins = webpackConfig.plugins.filter((plugin) => {
    const ret = !(plugin instanceof webpack.optimize.UglifyJsPlugin);
    return ret;
  });
  uncompressedWebpackConfig.plugins = uncompressedWebpackConfig.plugins.filter((plugin) => {
    const ret = !(plugin instanceof webpack.DefinePlugin);
    return ret;
  });
  uncompressedWebpackConfig.plugins.push(new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development'),
  }));

  return [webpackConfig, uncompressedWebpackConfig];
}
