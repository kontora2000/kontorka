const path = require('path');
const express = require('express');
//webpack
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
//server
const session = require('express-session');
const favicon = require('static-favicon');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
//security
const helmet = require('helmet'); //some security funcions
//passport
const passport=require('passport');
const initPassport = require('./src/server/passport/init');

//routes
const initRoutes = require('./src/server/routes/index');

//mongoose db parameters and models
const mongoose  = require('mongoose');
const dbConfig = require('./src/server/db');

// Connect to DB
mongoose.connect(dbConfig.url, { useNewUrlParser: true, useUnifiedTopology: true,  useFindAndModify: false });

//check if app runs in dev mode (with --dev parameter)
let devBuild = false;
if (process.argv.indexOf('--dev')>0)
    devBuild=true;


//init exprees

const app = express();


//serve static files
app.use('/', express.static(__dirname+'/'));
app.use('/views',express.static(__dirname+"/views"));
app.use('/build',express.static(__dirname+"/build"));
app.use('/assets',express.static(__dirname+"/assets"));

//init webpack
var webpackConfig = require(process.env.WEBPACK_CONFIG ? process.env.WEBPACK_CONFIG : './webpack.config');

const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler,{
    logLevel: 'warn', 
    publicPath: webpackConfig.output.publicPath
}))
app.use(webpackHotMiddleware(compiler,{log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000}));

//init session parsers
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({ secret: 'kontoraSecretKey', resave: true, saveUninitialized: true }));

// init passport and routes
app.use(passport.initialize());
app.use(passport.session());
initPassport(passport);
const routes = initRoutes(passport);

app.use('/', routes);



const viewsFolder = __dirname+'/views/';

//async requests
// app.get('/vacancies',function(req,res){
//     if (devBuild){
//        console.log('Recived request to /vacansies');
//     }
//     if (req.xhr) {   
//       res.sendFile(viewsFolder+'vacancies.html');
//     }
//     else  
//       res.sendFile(viewsFolder+'404.html');
// });


// app.get('/partnership',function(req,res){
//     if (devBuild){
//         console.log('Recived request to /partnership');
//     }
//     if (req.xhr) {   
//         res.sendFile(viewsFolder+'partnership.html');
//     }
//     else 
//         res.sendFile(viewsFolder+'404.html');
// }); 

var http = require('http');

var server = http.createServer(app);
//listening port
server.listen(2000, ()=>{
    if (devBuild)
        console.log("APP  started at 2000 at development mode!")
});