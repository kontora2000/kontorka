// eslint-disable-next-line import/no-extraneous-dependencies
import webpack from 'webpack';
// eslint-disable-next-line import/no-extraneous-dependencies
import webpackDevMiddleware from 'webpack-dev-middleware';
// eslint-disable-next-line import/no-extraneous-dependencies
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../../webpack/webpack.dev.config';

function initWebpackHMR(app) { 
  const compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(compiler, {
    logLevel: 'warn', 
    publicPath: webpackConfig.output.publicPath,
  }));
  app.use(webpackHotMiddleware(compiler, { log: console.log, }));
}
export default {
  init: initWebpackHMR,
};
