const express = require('express');
const mongoose = require('mongoose');
const app = new express.Router();

app.get('/', (req, res) => {
  res.render('api');
});

app.get('/basics', (req, res) => {
  res.render('api');
});

module.exports = app;