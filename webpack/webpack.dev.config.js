const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const Dotenv = require('dotenv-webpack');
let conf = {
  mode: 'development',
  context: path.resolve(__dirname,'../views/index.html'),
  entry: ['webpack-hot-middleware/client?',
  path.resolve(__dirname,'../src/client/client.js')],
  output: {
    path:path.resolve(__dirname,'../build/client/'),
    filename:'bundle.js',
    publicPath:path.resolve(__dirname,'../build/client/')+'/'
  },
  devtool: '#source-map',
  target:'web',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      }
    ]
  },
  plugins:[
    new Dotenv(),
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
    }
  },
}

module.exports = conf;