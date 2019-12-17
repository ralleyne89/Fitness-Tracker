// require node packages and files
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');


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

// begin server listening
app.listen(PORT, () => console.log('Server starting on Port: ' + PORT));