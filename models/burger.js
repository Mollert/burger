
var orm = require("../config/orm.js");

var burger = {
	selectAll: function(table, cb) {
		orm.selectAll(table, function(res) {
			cb(res);
		});
	},
	insertOne: function(table, newBurger, eaten, cb) {
		orm.insertOne(table, newBurger, eaten, function(res) {
			cb(res);
		});
	},
	updateOne: function(table, which, updateBurger, cb) {
		orm.updateOne(table, which, updateBurger, function(res) {
			cb(res);
		});
	}
};
//console.log(burger.selectAll(burgers));

module.exports = burger;

