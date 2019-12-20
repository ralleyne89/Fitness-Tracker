// require node packages and files
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'fitnessdb';

// Create a new MongoClient
const client = new MongoClient(url);


const app = express();
const PORT = process.env.PORT || 5150;

require('./routes/api-routes')(app);

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Static directory to be served
app.use(express.static("public"));


// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  client.close();
});

app.listen(PORT,() => console.log("Server is connected on PORT " + PORT))

