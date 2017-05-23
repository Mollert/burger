
var connection = require("./connection.js");

var orm = {
	selectAll: function() {
				connection.query("SELECT burger_name FROM burgers", function(err, res) {
	 			if (err) throw err;
				for (i = 0; i < res.length; i++) {
					console.log(res[i].burger_name);
				}
				});
			},
	insertOne: function(newBurger) {
				connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [newBurger], function(err, res) {
	 			if (err) throw err;
				});
			},
	updateOne: function(updateBurger) {
				connection.query("UPDATE burgers SET devoured = true WHERE burger_name = (?)", [updateBurger], function(err, res) {
	 			if (err) throw err;
				});
			},
	deleteOne: function(gone) {
				connection.query("DELETE FROM burgers WHERE burger_name = (?)", [gone], function(err, res) {
	 			if (err) throw err;
				});
			}
};

//console.log(orm.selectAll());

module.exports = orm;
