var express = require('express');
var router = express.Router();
const path=require('path');

//check if app runs in dev mode (with --dev parameter)
let devBuild = false;
if (process.argv.indexOf('--dev')>0)
    devBuild=true;


var isAuthenticated = function (req, res, next) {
	// if user is authenticated in the session, call the next() to call the next request handler 
	// Passport adds this method to request object. A middleware is allowed to add properties to
	// request and response objects
	if (req.isAuthenticated()) {
		console.log('auth is working')
		return next();
	}
		
	// if the user is not authenticated then redirect him to the login page
	console.log('not auth');
	res.redirect('/');
}

module.exports = function(passport){

	/* GET login page. */

	router.get('/',function(req,res){
    res.sendFile(path.resolve() + '/views/index.html', (error)=>{
        if (devBuild) {
					if (error)
						console.log(error);
					else 
						console.log('Index.html is sent from server');
        }
    });
});

/* Handle Auth GET */
router.get('/auth', function(req,res) {
	res.sendFile(path.resolve() + '/views/auth.html', (error)=>{
		if (devBuild) {
			if (error)
				console.log(error);
			else 
				console.log('Auth.html is sent from server');
		}
	});
})


router.post('/auth', function(req, res, next) {
  passport.authenticate('login', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) { return res.redirect('/'); }

		req.logIn(user, function(err) {
			if (err) { return next(err); }
			console.log( 'sucess post auth', req.user);
      return res.status(200).json({ user: req.user });
    });
  })(req, res, next);
});

	/* Handle Logout */
	router.get('/signout', function(req, res) {
		req.logout();
		res.redirect('/');
	});

	return router;
}





