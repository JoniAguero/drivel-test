
const debug = require('debug')('back-end')
const cors = require('cors')
const logger = require('morgan')
const express = require('express');
const bodyParser = require('body-parser');
// const phonesRoute = require('./routes/phones.route');
// const authRoute = require('./routes/auth.route');

require('dotenv').config();

const app = express();
app.use(logger('dev'))
app.use(cors())

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var distDir = __dirname + "/dist/";
app.use(express.static(distDir));
// app.use('/api', [phonesRoute, authRoute]);

module.exports = app;