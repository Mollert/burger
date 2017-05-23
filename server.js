
var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

var app = express();
var port = 6400;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
//app.use('/static/',express.static(path.join(__dirname ,"config")));

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");


//require("./app/routing/apiRoutes.js")(app);
//require("./app/routing/htmlRoutes.js")(app);

//app.get("/", function(req, res) {
//  res.sendFile(path.join(__dirname ,"app/public/home.html"));
//});

app.listen(port, function() {
  console.log("App is listening on PORT " + port);
});
