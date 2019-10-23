const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app =  express();
const sendmail =  require('sendmail');
// const mailer= require('express-mailer');

// mailer.extend(app, {
//     from: 'no-reply@example.com',
//     host: 'smtp.gmail.com',
//     secureConnection: true, 
//     port: 465, 
//     transportMethod: 'SMTP', 
//     auth: {
//       user: 'gmail.user@gmail.com',
//       pass: 'userpass'
//     }
//   });



app.use('/', express.static(__dirname));

app.use('/_img',express.static(__dirname+"/_img"));
app.use('/_js',express.static(__dirname+"/_js"));
app.use('/_css',express.static(__dirname+"/_css"));
app.use('/_img',express.static(__dirname+"/_img"));
app.use(bodyParser.json());

app.get('/', (req,res)=>{
    res.sendFile('index.html');
})



app.post('/send', (req,res)=>{
    res.send('asdqwer');
    let err="";
    if (req.xhr) {
        sendmail({
            from: 'no-reply@prostogaz.ru',
            to: 'stasmyhero@gmail.com',
            subject: 'test sendmail',
            html: 'Mail of test sendmail',
          }, function(err, reply) {
            req.send(JSON.stringify(err));
        });
    }
    
})


app.listen('3000');


