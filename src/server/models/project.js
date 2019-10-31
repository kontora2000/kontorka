const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  title: String,
  content: String,
  size: String,
  url: String,
});
module.exports = mongoose.model('project', ProjectSchema);