
var express = require("express");
//var ? = require("../models/burger.js");
var orm = require("../config/orm.js");

var HotBurger = new CreateBurger("hotBurger");
//console.log(HotBurger.burgerName);

module.exports = function (app) {

  app.get("/", function(req, res) {
    res.render("home");
  });

  app.get("/", function(req, res) {
    var list = orm.selectAll();
    orm.selectAll();
    res.render("index", { existBurger: list });
  });

  app.get("/", function(req, res) {
    var list = orm.selectAll();
    orm.selectAll();
    res.render("index", { newBurger: list });
  });

  app.post("/", function(req, res) {
    orm.insertOne(req.body.burgerName);
      res.redirect("/");
  });

};