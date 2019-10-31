const mongoose = require('mongoose');
const bCrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: 
  {
    type: String,
    trim: true,
    required: true,
  },
  token: {
    type: String,
    required: true
  }
});

UserSchema.pre('save', function (next) {
  // Hash the password before saving the user model
  if (this.isModified('password')) {
    this.password = bCrypt.hashSync(this.password, bCrypt.genSaltSync(10), null);
  }
  
  next();
})

UserSchema.methods.validatePassword = function(password) {
  return bCrypt.compareSync(password, this.password);
};


UserSchema.methods.generateJWT = function() {

  const token =  jwt.sign({
    username: this.username,
    id: this._id,
    },
    process.env.JWT_KEY,
    { expiresIn: '24h' }
  );

  this.token = token;
  this.save();

  return token;
}

module.exports = mongoose.model('user', UserSchema);