
require("dotenv").config();
var password = process.env.password;
var mysql = require("mysql");

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

function selectAll() {
	connection.query("SELECT burger_name FROM burgers", function(err, res) {
 		if (err) throw err;
		for (i = 0; i < res.length; i++) {
			console.log(res[i].burger_name);
		}
	});
};

var newB = "burgerburger";

function insertOne(newBurger) {
	connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [newBurger], function(err, res) {
 		if (err) throw err;
	selectAll();
	});
};

function updateOne(updateBurger) {
	connection.query("UPDATE burgers SET devoured = true WHERE burger_name = (?)", [updateBurger], function(err, res) {
 		if (err) throw err;
	selectAll();
	});
};

function deleteOne(gone) {
	connection.query("DELETE FROM burgers WHERE burger_name = (?)", [gone], function(err, res) {
 		if (err) throw err;
	});
	selectAll};

insertOne(newB);
//selectAll();

module.exports = connection;