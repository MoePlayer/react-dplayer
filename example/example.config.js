const path = require('path');
const rootPath = process.cwd();
const srcPath = path.resolve(rootPath, 'example');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    bundle: [path.resolve(srcPath, 'example.js')],
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
    stats: { colors: true },
  },
  output: {
    path: path.resolve(srcPath, '__BUILD__'),
    filename: '[name].js',
    publicPath: '',
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
  devtool: 'cheap-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(srcPath, 'index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
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
};
