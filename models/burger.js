
var orm = require("../config/orm.js");

function CreateBurger(burgerName) {
	this.burgerName = burgerName;
	this.selectAll = orm.selectAll();
	this.insertOne = orm.insertOne(burgerName);
	this.updateOne = orm.updateOne(burgerName);
	this.deleteOne = orm.deleteOne(burgerName);
};

//var HotBurger = new CreateBurger("hotBurger");
//HotBurger.selectAll();
//console.log(HotBurger.burgerName);

//module.exports = ?;

//console.log(orm.selectAll());



