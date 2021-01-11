
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

app.get("/api/contacts", function(req, res) {
  db.collection(CONTACTS_COLLECTION).find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get contacts.");
    } else {
      res.status(200).json(docs);
    }
  });
});

app.post("/api/contacts", function(req, res) {
  var newContact = req.body;
  newContact.createDate = new Date();

  if (!req.body.name) {
    handleError(res, "Invalid user input", "Must provide a name.", 400);
  } else {
    db.collection(CONTACTS_COLLECTION).insertOne(newContact, function(err, doc) {
      if (err) {
        handleError(res, err.message, "Failed to create new contact.");
      } else {
        res.status(201).json(doc.ops[0]);
      }
    });
  }
});


app.use('/', (req, res) => {
  res.send(`
  <div style="width: 100%; text-align: center">
    <h1 style >Hello :) , to make sure you use the API, use /api/phones </h1>
  </div>`);
});

module.exports = app;