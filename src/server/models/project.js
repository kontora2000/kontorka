const mongoose = require('mongoose');

const { Schema, } = mongoose;

const ProjectSchema = new Schema({
  title: String,
  content: String,
  size: String,
  url: String,
});
module.exports = mongoose.model('project', ProjectSchema);
