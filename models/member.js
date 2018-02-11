const mongoose = require('mongoose');

const MemberSchema = new mongoose.Schema({
  name: String,
  bio: String,
  location: String,
  linkedin: String,
  website: String,
  github: String
});

module.exports = mongoose.model('Member', MemberSchema);