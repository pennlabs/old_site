const express = require('express');
const handlebars = require('express-handlebars');
const body_parser = require('body-parser');
const mongoose = require('mongoose');
const env = require('dotenv');
const path = require('path');
const models = require('./models');
const app = express();
env.config();

app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json());

app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/views/img')); 
app.use('/static', express.static(path.join(__dirname, 'views/static'));

models.connect(process.env.DB_URI);

app.get('/', (req, res) => {
  res.render('splash');
});

app.get('/team/:username', (req, res) => {  
  mongoose.model('Member').findOne({username: req.params.username}, (err, member) => {
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

app.get('/docs/api', (req, res) => {
  res.render('docs_page');
});

app.get('/mobile', (req, res) => {
  res.redirect('products');
});

app.get('/mobile/*', (req, res) => {
  res.redirect('../products');
});

app.get('*', (req, res) => {
  res.render('error');
});

app.listen(process.env.PORT, err => {
  if (err) {
    console.error(err);
  } else {
    console.info("Peep port %s 🌎", process.env.PORT);
  }
});