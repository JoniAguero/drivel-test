const app = require("./server/app");
const chalk = require("chalk");

var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

// Connect to the database before starting the application server.
mongodb.MongoClient.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/test",
  function (err, client) {
    if (err) {
      console.log(err);
      process.exit(1);
    }

    // Save database object from the callback for reuse.
    db = client.db();
    console.log("Database connection ready");

    // Initialize the app.
    var server = app.listen(process.env.PORT || 8080, function () {
      var port = server.address().port;
      console.log(`Server Running on port ${chalk.green(`${port}`)}`);
    });
  }
);
