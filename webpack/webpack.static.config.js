const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, '../src/dev-server.js'),
  output: {
    path: path.resolve(__dirname, '../'),
    publicPath: '/',
    filename: '../dev-server.js',
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
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      }
    ],
  },
};
