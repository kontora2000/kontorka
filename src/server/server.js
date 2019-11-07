// import path from 'path';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
// server
import session from 'express-session';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';


// passport
import passport from 'passport';
import mongoose from 'mongoose';
import initPassport from './passport/init';

// mongoose db parameters and models

// routes
import initRoutes from './routes/index';
// connect to DB
dotenv.config();
mongoose.connect(process.env.DB_URL, 
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, });

// check if app runs in dev mode (with --dev parameter)
let devBuild = false;
if (process.argv.indexOf('--dev') > 0) { devBuild = true; }

// init exprees
const app = express();
app.use('*', cors());


// init session parsers
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true, }));
app.use(cookieParser());
app.use(session({ secret: 'kontoraSecretKey', resave: false, saveUninitialized: false, }));

// init passport and routes
app.use(passport.initialize());
app.use(passport.session());
initPassport(passport);

const routes = initRoutes(passport);

app.use('/', routes);

// listening port
const http = require('http');

const server = http.createServer(app);
server.listen(2002, () => {
  if (devBuild) { console.log('Backend started at 2002 at development mode!!!!'); }
}); 
