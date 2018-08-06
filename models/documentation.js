const mongoose = require('mongoose');

const DocumentationSchema = new mongoose.Schema({
  product: String,
  title: String,
  body: String
});

module.exports = mongoose.model('Documentation', DocumentationSchema);