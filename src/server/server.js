//import path from 'path';
import  express from 'express'

//server
import session from 'express-session';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

//security
import helmet from 'helmet'; 
//passport
import passport from 'passport';
import initPassport from './passport/init';

//mongoose db parameters and models
import mongoose from 'mongoose';
import dbConfig from './db';

//routes
import initRoutes from './routes/index'
//connect to DB
mongoose.connect(dbConfig.url, { useNewUrlParser: true, useUnifiedTopology: true,  useFindAndModify: false });

//check if app runs in dev mode (with --dev parameter)
let devBuild = false;
if (process.argv.indexOf('--dev')>0)
    devBuild=true;

//init exprees
const app = express();

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

//listening port
var http = require('http');
var server = http.createServer(app);
server.listen(2002, ()=>{
    if (devBuild) 
        console.log("Backend started at 2002 at development mode!!!!")
}); 