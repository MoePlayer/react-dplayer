const path = require('path');
const rootPath = process.cwd();
const srcPath = path.resolve(rootPath, 'src');
const pkg = require('./package.json');
const libraryName = 'ReactDPlayer';
const webpack = require('webpack');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const baseWebpackConfig = {
  output: {
    path: path.resolve(rootPath, 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].js',
    library: libraryName,
    libraryTarget: 'umd',
  },
  externals: {
    [`react`]: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
    [`dplayer`]: 'DPlayer',
  },
  devtool: '#sourcemap',
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', '.json'],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader',
            options: {
              configFile: path.resolve(rootPath, 'babelrc/default/.babelrc'),
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.BannerPlugin(
      `${pkg.name} v${pkg.version}

Copyright 2017-present, MoePlayer, Inc.
All rights reserved.`,
    ),
  ],
};

const createWebpackConfig = function (config) {
  return merge(baseWebpackConfig, config);
};

const minWebpackConfig = createWebpackConfig({
  mode: 'production',
  entry: {
    [`${pkg.name}.min`]: path.resolve(srcPath, 'index.js'),
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          warnings: false,
          output: {
            ascii_only: true,
          },
        },
        sourceMap: true,
      }),
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
});

const uncompressedWebpackConfig = createWebpackConfig({
  mode: 'development',
  entry: {
    [`${pkg.name}`]: path.resolve(srcPath, 'index.js'),
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ],
});

module.exports = [minWebpackConfig, uncompressedWebpackConfig];
