const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const PATHS = require('./paths');

// Merge webpack configuration files
const config = (env, argv) =>
  merge(common, {
    externals: {
  "window":"window"
 } ,
 output: {
    globalObject: 'this',
  },
    resolve: {
      fallback: {
      "net": false,
      "child_process": false,
      },
    },
    entry: {
      popup: PATHS.src + '/popup.js',
      contentScript: PATHS.src + '/contentScript.js',
      background: PATHS.src + '/background.js',
    },
    devtool: argv.mode === 'production' ? false : 'source-map',
    plugins: [new NodePolyfillPlugin(),new webpack.ProvidePlugin({
      process: 'process/browser',
    })],
  });

module.exports = config;
