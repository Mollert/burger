
var connection = require("./connection.js");

var orm = {
	selectAll: function(table, cb) {
		var queryString = "SELECT id, burger_name,";
		queryString += " devoured FROM " + table;
		connection.query(queryString, function(err, res) {
	 		if (err) {
	 		 throw err;
			}
			cb(res);
		});
	},
	insertOne: function(table, newBurger, eaten, cb) {
		var queryString = "INSERT INTO " + table + " (burger_name, devoured)";
		queryString += " VALUES ('" + newBurger + "', " + eaten + ")";
		connection.query(queryString, function(err, res) {
	 		if (err) {
	 		 throw err;
	 		}
			cb(res);
		});
	},
	updateOne: function(table, which, cb) {
		var queryString = "UPDATE " + table + " SET devoured = true";
		queryString += " WHERE id = " + which;
		connection.query(queryString, function(err, res) {
	 		if (err) {
	 		 throw err;
	 		}
	 		cb(res);
		});
	}	
};

module.exports = orm;
