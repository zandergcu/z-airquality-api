var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'API Practice - Air Quality Testing Stations',
    description: 'Air Quality Testing Stations API Practice',
    url: 'https://z-airqualty-api.herokuapp.com'
  });
});

module.exports = router;
