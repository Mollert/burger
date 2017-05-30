
var connection = require("./connection.js");

var orm = {
	selectAll: function(cb) {
//		var queryString = "SELECT burger_name FROM" + table;
//		connection.query(queryString, function(err, res) {
		connection.query("SELECT burger_name FROM burgers", function(err, res) {
	 		if (err) {
	 		 throw err;
			}
//			for (i=0; i<res.length; i++) {
//				console.log(res[i].burger_name);
//			}
			cb(res);
		});
	},
	insertOne: function(newBurger, eaten, cb) {
//		var queryString = "INSERT INTO " + table " (burger_name)";
//		queryString += " VALUES " + (newBurger);
//		connection.query(queryString, function(err, res) {
		connection.query("INSERT INTO burgers (burger_name, devoured) VALUES (?)", [newBurger, eaten], function(err, res) {
	 		if (err) {
	 		 throw err;
	 		}
			cb(res);
		});
	},
	updateOne: function(updateBurger, which, cb) {
//		var queryString = "UPDATE" + table "SET devoured = true";
//		queryString += "WHERE burger_name = (?), [updateBurger]";
//		connection.query(queryString, function(err, res) {
		connection.query("UPDATE burgers SET devoured = (?) WHERE id = (?)", [updateBurger, which], function(err, res) {
	 		if (err) {
	 		 throw err;
	 		}
	 		cb(res);
		});
	}	
};
//console.log(orm.selectAll());

module.exports = orm;
