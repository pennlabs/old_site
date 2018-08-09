const express = require('express');
const mongoose = require('mongoose');
const app = new express.Router();

app.get('/', (req, res) => {
  res.render('splash');
});

app.get('/team/:username', (req, res) => {
  mongoose.model('Member').findOne({ username: req.params.username }, (err, member) => {
    res.render('member', member);
  });
});

app.get('/team', (req, res) => {
  mongoose.model('Member').find({}, (err, members) => {
    res.render('team', { members });
  });
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/docs', (req, res) => {
  res.render('docs');
});

app.get('/products', (req, res) => {
  res.render('products');
});

app.get('/guides', (req, res) => {
  res.render('guides');
});

app.get('/mobile', (req, res) => {
  res.redirect('products');
});

app.get('/mobile/*', (req, res) => {
  res.redirect('../products');
});

// Catch-all route for 404 errors
app.get('*', (req, res) => {
  res.render('error');
});

module.exports = app;