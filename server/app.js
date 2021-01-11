
const debug = require('debug')('back-end')
const cors = require('cors')
const logger = require('morgan')
const express = require('express');
const bodyParser = require('body-parser');
// const phonesRoute = require('./routes/phones.route');
// const authRoute = require('./routes/auth.route');

require('dotenv').config();

dbConnection();

const app = express();
app.use(logger('dev'))
app.use(cors())

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// app.use('/api', [phonesRoute, authRoute]);

app.use('/', (req, res) => {
  res.send(`
  <div style="width: 100%; text-align: center">
    <h1 style >Hello :) , to make sure you use the API, use /api/phones </h1>
  </div>`);
});

module.exports = app;