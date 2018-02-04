const express = require('express');
const handlebars = require('express-handlebars');
const body_parser = require('body-parser');
const app = express();
require('dotenv').config();

app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json());

app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/views/img')); 

app.get('/', (req, res) => {
  res.render('splash');
});

app.get('/team', (req, res) => {
  res.render('team');
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