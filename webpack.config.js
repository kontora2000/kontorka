const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

let conf = {
  mode: 'development',
  context:__dirname+'/views/index.html',
  entry:['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
        __dirname+'/src/client/client.js'],
  output: {
    path:path.resolve(__dirname,'./build/client/'),
    filename:'client-bundle.js',
    publicPath:path.resolve(__dirname,'./build/client/')+'/'
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
        test:/\.js$/,
        loader:'babel-loader'
      },
      {
        test:/\.css$/,
        use:['vue-style-loader',
        'css-loader']
      }
    ]
  },
  plugins:[
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  resolve: {
   extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
    }
  }
}

module.exports = conf;