const express = require('express');
const mongoose = require('mongoose');
const app = new express.Router();

app.get('/', (req, res) => {
  res.render('api');
});

app.get('/basics', (req, res) => {
  res.render('product', { 
      'name': 'PennBasics', 
      'description': "PennBasics is a one-stop shop for the basics of living at Penn. It strives to make students' lives easier at Penn so they can focus on what matters. PennBasics aggregates essential data on dining, laundry, and study spaces, and tailors the dashboard to your preferences.",
      'url': "https://pennbasics.com",
      'github': "https://github.com/pennlabs/pennbasics"
  });
});

module.exports = app;