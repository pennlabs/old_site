const express = require('express');
const mongoose = require('mongoose');
const showdown  = require('showdown');
const app = new express.Router();

app.get('/', (req, res) => {
  res.render('api');
});

app.get('/basics', (req, res) => {
  mongoose.model('Documentation').findOne({ product: "basics" }, (err, doc) => {
    const converter = new showdown.Converter();
    doc.body = converter.makeHtml(doc.body);
    
    res.render('product', { 
      'name': 'Penn Basics', 
      'description': "PennBasics is a one-stop shop for the basics of living at Penn. It strives to make students' lives easier at Penn so they can focus on what matters. PennBasics aggregates essential data on dining, laundry, and study spaces, and tailors the dashboard to your preferences.",
      'url': "https://pennbasics.com",
      'github': "https://github.com/pennlabs/pennbasics",
      doc
    });
  });
});

app.get('/pcr', (req, res) => {
  mongoose.model('Documentation').findOne({ product: "pcr" }, (err, doc) => {
    const converter = new showdown.Converter();
    doc.body = converter.makeHtml(doc.body);
    
    res.render('product', { 
      'name': 'Penn Course Review', 
      'description': "The student-run Penn Course Review has served as a valuable guide for course selection since the 1960s. Now, we have completely redesigned the experience, making it even easier to look for your classes and professors. We hope you will enjoy it!",
      'url': "https://penncoursereview.com",
      'github': "https://github.com/pennlabs/pcr-api",
      doc
    });
  });
});

app.get('/mobile', (req, res) => {
  mongoose.model('Documentation').findOne({ product: "mobile" }, (err, doc) => {
    const converter = new showdown.Converter();
    doc.body = converter.makeHtml(doc.body);
    
    res.render('product', { 
      'name': 'Penn Mobile', 
      'description': "Penn Mobile App is the university's first official mobile app. On iOS and Android, PennMobile provides live dining hall menus and hours, course and faculty search, live bus routes, popular sources of campus-news and school support numbers.",
      'url': "https://pennmobile.com",
      'github': "https://github.com/pennlabs/labs-api-server",
      doc
    });
  });
});

module.exports = app;