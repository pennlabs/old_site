// Import frameworks
const express = require('express');
const handlebars = require('express-handlebars');
const body_parser = require('body-parser');
const mongoose = require('mongoose');
const showdown = require('showdown');
const env = require('dotenv');
const path = require('path');
const models = require('./models');
const app = express();

// Configure environment variables
env.config();

// Configure the app environment
app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json());
app.use(express.static(path.join(__dirname, "public")));

app.engine('handlebars', handlebars({
  defaultLayout: 'main',
}));
app.set('view engine', 'handlebars');
app.use('static', express.static(path.join(__dirname, 'public')));

models.connect(process.env.DB_URI);

// Handle routing
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
  res.render('api');
});

app.get('/docs/api/:route', (req, res) => {
  mongoose.model('Route').findOne({name: req.params.route}, (err, route) => {
    const converter = new showdown.Converter();
    route.markdown = converter.makeHtml(route.markdown);
    res.render('route', route);
  });
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

// Start the app
app.listen(process.env.PORT, err => {
  if (err) {
    console.error(err);
  } else {
    console.info("Peep port %s 🐷 (oink oink)", process.env.PORT);
  }
});
