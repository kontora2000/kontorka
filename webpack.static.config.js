const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  mode:'development',
  entry: 
    __dirname + '/src/dev-server.js'
  ,
  output: {
    path: path.resolve(__dirname, './'),
    publicPath: '/',
    filename: './dev-server.js'
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
        use: {
          loader: "babel-loader"
        }
      }]
  },
}