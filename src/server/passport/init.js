const login = require('./login');
// const signup = require('./signup');
const User = require('../models/user');
// import login from './login';
// import signup from './signup';
// import User from '../models/user';

module.exports = function (passport) {
// Passport needs to be able to serialize and deserialize users to support persistent login sessions
  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });

  // Setting up Passport Strategies for Login and SignUp/Registration
  login(passport);
  // signup(passport);
};


// let initPassport =  function(passport) {
//     passport.serializeUser(function(user, done) {
//         done(null, user._id);
//     });

//     passport.deserializeUser(function(id, done) {
//         User.findById(id, function(err, user) {
//             done(err, user);
//         });
//     });

//     login(passport);     
// }

// export default initPassport;
