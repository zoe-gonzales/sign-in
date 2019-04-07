var express = require('express');
var db = require('./models');

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// setting up handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Routes
require("./routes/routes.js")(app);

db.sequelize.sync().then(function(){
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});

