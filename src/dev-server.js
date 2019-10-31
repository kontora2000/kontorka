import express from 'express';
import HMR from './server/hmr'; //hot module reload

const app=express();

app.use('/', express.static(__dirname+'/'));
app.use('/views',express.static(__dirname+"/views"));
app.use('/build',express.static(__dirname+"/build"));
app.use('/assets',express.static(__dirname+"/assets"));

//routes
HMR.init(app);

app.get('/', function(req,res){
    res.sendFile(__dirname+'/views/index.html');
})

app.get('/auth', function(req,res){
    res.sendFile(__dirname+'/views/auth.html');
})

const http = require('http');
const server = http.createServer(app);
server.listen(8000, ()=>{
        console.log("Static server started at 8000!")
});