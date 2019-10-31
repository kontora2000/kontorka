
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../../webpack.dev.config';

function initWebpackHMR(app) { 
    const compiler = webpack(webpackConfig);
    app.use(webpackDevMiddleware(compiler,{
        logLevel: 'warn', 
        publicPath: webpackConfig.output.publicPath
        }))
    app.use(webpackHotMiddleware(compiler,{log: console.log}));
}
export default {
   init: initWebpackHMR
}


