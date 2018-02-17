const mongoose = require('mongoose');

const MemberSchema = new mongoose.Schema({
  name: String,
  username: String,
  bio: String,
  major: String,
  location: String,
  photo: String,
  role: String,
  current: Boolean,  
  linkedin: String,
  website: String,
  github: String
});

module.exports = mongoose.model('Member', MemberSchema);