const LocalStrategy = require('passport-local').Strategy;
// const bCrypt = require('bcrypt-nodejs');
const User = require('../models/user');

module.exports = function (passport) {
  passport.use('signup', new LocalStrategy({
    passReqToCallback: true, // allows us to pass back the entire request to the callback
  },
  ((req, username, password, done) => {
    const findOrCreateUser = function () {
      // find a user in Mongo with provided username
      User.findOne({ username, }, (err, user) => {
        // In case of any error, return using the done method
        if (err) {
          console.log(`Error in SignUp: ${err}`);
          return done(err);
        }
        // already exists
        if (user) {
          console.log(`User already exists with username: ${username}`);
          return done(null, false, { message: 'User Already Exists', });
        } else {
          // if there is no user with that email
          // create the user
          const newUser = new User(req.body); 
          // save the user
          // eslint-disable-next-line no-shadow
          newUser.save((err) => {
            if (err) {
              console.log(`Error in Saving user: ${err}`);  
              throw err;  
            }
            console.log('User Registration succesful');    
            return done(null, newUser);
          });
        }
      });
    };
    // Delay the execution of findOrCreateUser and execute the method
    // in the next tick of the event loop
    process.nextTick(findOrCreateUser);
  })));
};
