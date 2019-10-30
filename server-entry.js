import path from 'path';
import express from 'express';
//webpack
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack.config.js'
//passport
import passport from 'passport';
import initPassport from './src/server/passport/init';

initPassport(passport);

const app=express();

const viewsFolder = __dirname+'/views/';
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath, logLevel: 'warn'
  }))

app.use(webpackHotMiddleware(compiler,{
    log: console.log
})

app.get('/', (req, res, next) => {
    compiler.outputFileSystem.readFile(viewsFolder+'index.html', (err, result) => {
    if (err) {
      return next(err)
    }
    res.set('content-type', 'text/html')
    res.send(result)
    res.end()
    })
  })



