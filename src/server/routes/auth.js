const express = require('express');
const router = express.Router();
const path=require('path');


module.exports = function (passport) {
/* Handle Auth methods */
router.get('/', function(req,res) {
	res.sendFile(path.resolve() + '/views/auth.html', (error)=> {});
})

router.post('/', function(req, res, next) {
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

return router;
}