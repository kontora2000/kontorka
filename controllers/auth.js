module.exports =  function (req, res, next) {
	// if user is authenticated in the session, call the next() to call the next request handler 
	// Passport adds this method to request object. A middleware is allowed to add properties to
	// request and response objects
	if (req.isAuthenticated()) {
		console.log('auth is ok')
		return next();
	}
		
	// if the user is not authenticated then redirect him to the login page
	console.log('not auth');
	res.redirect('/');
}