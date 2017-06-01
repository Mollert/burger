
var express = require("express");
var router = express.Router()
var orm = require("../config/orm.js");
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.selectAll("burgers", function(data) {
    var allBurgers = {
      burgers: data
    };
    res.render("index", allBurgers);
  });
});

router.post("/", function(req, res) {
  burger.insertOne("burgers", req.body.addBurger, false,
    function() {
      res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var which = "id = " + req.parms.eaten;
  burger.updateOne({devoured: req.body.devoured},
  which, function() {
      res.redirect("/");
  });
});

module.exports = router