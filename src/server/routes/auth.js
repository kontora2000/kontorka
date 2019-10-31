import express from 'express';
const router = express.Router();

export default function (passport) {
/* Handle Auth methods */
// router.get('/', function(req,res) {
//   console.log('huiaslaio-nadoya');
// 	res.sendFile(path.resolve() + '/views/auth.html', (error)=> {});
// })
router.post('/', function(req, res, next) {
  passport.authenticate('login', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) { return res.redirect('/'); }
		req.logIn(user, function(err) {
			if (err) { return next(err); }
			console.log( 'success post auth', req.user);
      return res.status(200).json({ user: req.user });
    });
  })(req, res, next);
});
return router;
}