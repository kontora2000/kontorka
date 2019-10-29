const path = require('path');
const express = require('express');
const session = require('express-session');
const favicon = require('static-favicon');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const helmet = require('helmet'); //some security funcions
//passport
const passport=require('passport');
const initPassport = require('./passport/init');

//routes
const initRoutes = require('./routes/index');

//mongoose db parameters and models
const mongoose  = require('mongoose');
const dbConfig = require('./db');

// Connect to DB
mongoose.connect(dbConfig.url, { useNewUrlParser: true, useUnifiedTopology: true });

//check if app runs in dev mode (with --dev parameter)
let devBuild = false;
if (process.argv.indexOf('--dev')>0)
    devBuild=true;


//init exprees

const app = express();

//serve static files
app.use('/views',express.static(__dirname+"/build"));
app.use('/build',express.static(__dirname+"/build"));
app.use('/assets',express.static(__dirname+"/assets"));

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({ secret: 'kontoraSecretKey', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// init passport and routes
initPassport(passport);
const routes = initRoutes(passport);

app.use('/', routes);


const viewsFolder = __dirname+'/views/';

//async requests
app.get('/vacancies',function(req,res){
    if (devBuild){
       console.log('Recived request to /vacansies');
    }
    if (req.xhr) {   
      res.sendFile(viewsFolder+'vacancies.html');
    }
    else  
      res.sendFile(viewsFolder+'404.html');
});


app.get('/partnership',function(req,res){
    if (devBuild){
        console.log('Recived request to /partnership');
    }
    if (req.xhr) {   
        res.sendFile(viewsFolder+'partnership.html');
    }
    else 
        res.sendFile(viewsFolder+'404.html');
}); 


//listening port
app.listen(2000, ()=>{
    if (devBuild)
        console.log("APP  started at 2000 at development mode")
});





