const mongoose = require('mongoose');

const RouteSchema = new mongoose.Schema({
  name: String,
  markdown: String,
  method: String
});

module.exports = mongoose.model('Route', RouteSchema);