const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const WebpackShellPLugin = require('webpack-shell-plugin');


module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, '../src/server/server.js'),
  output: {
    path: path.resolve(__dirname, './'),
    publicPath: '/',
    filename: 'build/server/bundle.js',
  },
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,  
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      }
    ],
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new WebpackShellPLugin({ onBuildEnd: ['nodemon ./build/server/bundle.js --watch ./build/server'], })
  ],
};
