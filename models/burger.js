
var orm = require("../config/orm.js");

var burger = {
	selectAll: function(cb) {
		orm.selectAll(function(res) {
//			console.log(res);
			return(res);
		});
	},
	insertOne: function(newBurger, eaten, cb) {
		orm.insertOne(newBurger, eaten, function(res) {
			return(res);
		});
	},
	updateOne: function(updateBurger, which, cb) {
		orm.updateOne(updateBurger, which, function(res) {
			return(res);
		});
	}
};
//console.log(burger.selectAll());

module.exports = burger;

