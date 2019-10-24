const path=require('path');
const session = require('express-session');
const cookieParser=require('cookie-parser');
const helmet = require('helmet'); //some security funcions
//passport
const passport=require('passport');
const LocalStrategy = require('passport-local').Strategy;

//mongo db parameters and models
//const mongoose  = require('mongoose');
//const uri='mongodb://localhost:27017';
// const userModel = require('./models/user.model');

// passport.use(new LocalStrategy(userModel.authenticate()));
// passport.serializeUser(userModel.serializeUser());
// passport.deserializeUser(userModel.deserializeUser());


//check if app runs in dev mode (with --dev parameter)
let devBuild = false;
if (process.argv.indexOf('--dev')>0)
    devBuild=true;


//init exprees
const express = require('express');
const app = express();

//serve static files
app.use('/views',express.static(__dirname+"/build"));
app.use('/build',express.static(__dirname+"/build"));
app.use('/assets',express.static(__dirname+"/assets"));


//routes
const viewsFolder = __dirname+'/views/';
app.get('/',function(req,res){
    res.sendFile(__dirname+ '/views/index.html', (error)=>{
        if (devBuild) {
            if (error)
                console.log(error);
            else 
                console.log('Index.html is sent from server');
        }
    });
});

app.get('/auth', function(req,res) {
    res.sendFile(__dirname+ '/views/auth.html', (error)=>{
        if (devBuild) {
            if (error)
                console.log(error);
            else 
                console.log('Auth.html is sent from server');
        }
    });
})

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





