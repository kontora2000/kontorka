const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: String,
  password: String,
  //passwordHash: String,
  //passwordSalt: String
});
module.exports = mongoose.model('user', UserSchema);