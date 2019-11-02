const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');


module.exports = function (passport) {
  passport.use('login', new LocalStrategy({
    passReqToCallback: true,
  },
  ((req, username, password, done) => { 
    // check in mongo if a user with username exists or not
    User.findOne({ username, })
      .then((user) => {
        if (!user || !user.validatePassword(password)) {
          return done(null, false, { errors: { 'email or password': 'is invalid', }, });
        }

        return done(null, user);
      }).catch(done);
  }))); 
};
