const mongoose = require('mongoose');

const UpdateSchema = new mongoose.Schema({
  team: String,
  title: String,
  body: String
});

module.exports = mongoose.model('Update', UpdateSchema);