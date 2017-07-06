const express = require('express');
const mongoose = require('mongoose');
const Jacket = require('./models/jacket');
const mustacheExpress = require('mustache-express');
const jacketController = require('./controllers/jacketController');
const bodyParser = require('body-parser');
const router = require('./routes/router');
const path = require('path');

const app = express();

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/jacketdb');

router(app);

app.listen(3000);
