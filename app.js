const express = require('express');
const mongoose = require('mongoose');
const Jacket = require('./models/jacket');
const mustacheExpress = require('mustache-express');
const jacketController = require('./controllers/jacketController');
const bodyParser = require('body-parser');

const app = express();

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/jacketdb');

app.get('/', jacketController.home);
app.get('/jackets', jacketController.list);
app.post('/add', jacketController.add);

app.listen(3000);
