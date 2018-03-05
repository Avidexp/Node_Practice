var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Dylan's test app", welcome:"Welcome to my app designed to test modern angular development!" });
});

module.exports = router;
