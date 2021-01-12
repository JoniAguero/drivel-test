
const debug = require('debug')('back-end')
const cors = require('cors')
const logger = require('morgan')
const express = require('express');
const bodyParser = require('body-parser');
const { dbConnection } = require('./database/config');
const recipesRoute = require('./routes/recipes.route');
const authRoute = require('./routes/auth.route');

require('dotenv').config();

dbConnection();

const app = express();
app.use(logger('dev'))
app.use(cors())

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api', [recipesRoute, authRoute]);

module.exports = app;