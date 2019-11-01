import express from 'express';

// eslint-disable-next-line prefer-const
let router = express.Router();

export default function initPassport(passport) {
  /* Handle Auth methods */
  router.post('/', (req, res, next) => {
    passport.authenticate('login', (err, user, info) => {
      if (err) { return next(err); }
      if (!user) { return res.status(401).json(info); }   
      // eslint-disable-next-line no-shadow
      req.logIn(user, (err) => {
        if (err) { return next(err); }
        user.generateJWT();
        const { password, __v, ...savedUser } = req.user._doc;
        return res.status(200).json({ user: savedUser, });
      });
    })(req, res, next);
  });
  return router;
}
