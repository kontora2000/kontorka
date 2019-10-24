const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

let conf = {
    mode: 'development',
    entry: __dirname+'/src/main.js',
    output: {
        path:path.resolve(__dirname,'./build'),
        filename:'bundle.js',
        publicPath:'/build'
    },
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
        new VueLoaderPlugin()
    ],
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
        'vue$': 'vue/dist/vue.esm.js',
        }
    },
    devServer:{
        historyApiFallback: true,
        hot: true,
        inline: true,
        host: 'localhost',
        port: 2999, 
        proxy: {
            '^/api/*': {
                target: 'http://localhost:3000/api/',
                secure: false
            }
        }
    }
}

module.exports = conf;