const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const webpackShellPLugin  = require('webpack-shell-plugin');


module.exports = {
  mode:'development',
  entry: 
    __dirname + '/src/server/server.js'
  ,
  output: {
    path: path.resolve(__dirname, './'),
    publicPath: '/',
    filename: 'build/server/bundle.js'
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
      } 
    ]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpackShellPLugin({onBuildEnd: ['nodemon ./build/server/bundle.js --watch ./build/server']})
  ]
}