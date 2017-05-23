
var mysql = require("mysql");
//var dotenv = require("dotenv");
//dotenv.load();
require("dotenv").config();
//var password = process.env.password;
var password = "YYyyT";

var connection = mysql.createConnection(
	{	host: "localhost",
		port: 3306,
		user: "root",
		password: password,
		database: "burgers_db"
	});

connection.connect(function(err) {
	if (err) throw err;
	console.log("connected as id " + connection.threadId);
});

module.exports = connection;