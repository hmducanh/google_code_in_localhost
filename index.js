var express = require("express");
var app = express();
app.set("view engine", "ejs");
app.set("views", "./views");
app.listen(8080);

app.get("/", function(req, res)
{
	res.render("home");
});