const express = require('express');
const handlebars = require('express-handlebars');
const body_parser = require('body-parser');
const path = require('path');
const models = require('./models');
const app = express();

app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json());
app.use(express.static(path.join(__dirname, "public")));

app.set('view engine', 'handlebars');
app.use('/static', express.static(path.join(__dirname, 'views/static')));
app.engine('handlebars', handlebars({
  defaultLayout: 'main',
}));

models.connect(process.env.DB_URI);

const pageRoutes = require('./routes/pages');
const apiRoutes = require('./routes/api');

app.use('/api', apiRoutes);
app.use('/', pageRoutes);

app.listen(process.env.PORT, err => {
  if (err) {
    console.error(err);
  } else {
    console.info("Peep port %s 🐷", process.env.PORT);
  }
});
