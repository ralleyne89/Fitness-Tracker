// require node packages
const express = require('express');
const path = require('path');
const http = requre('http');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 5150;
let db = require("./models");


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(app.router)
// Static directory to be served
app.use(express.static("public"));


// api & html routes
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// begin server listening
app.listen(PORT, () => console.log('Server starting on Port: ' + PORT));