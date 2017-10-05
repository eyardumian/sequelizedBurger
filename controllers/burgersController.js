var express = require("express");

var router = express.Router();
var db = require("../models/burger.js");
var db = require("../models/index.js");


// get route -> index
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  // express callback response by calling burger.selectAllBurger
  db.burgers.findAll({}).then(function(data) {
    // Wrapping the array of returned burgers in a object so it can be referenced inside our handlebars
    var hbsObject = { burgers: data };
    res.render("index", hbsObject);
  });
});

// post route -> back to index
router.post("/burgers/create", function(req, res) {
  // takes the request object using it as input for buger.addBurger
  db.burgers.create({
    burger_name: req.body.burger_name}).then(function() {
    // render back to index with handle
    console.log(result);
    res.redirect("/");
  });
});

// put route -> back to index
router.put("/burgers/update", function(req, res) {
  db.burgers.update({ devoured: req.body.devoured }, {where: {id:req.params.id}}).then(function() {
    // render back to index with handle
    console.log(result);
    res.redirect("/");
  });
});

module.exports = router;
