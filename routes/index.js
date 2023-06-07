var express = require('express');
var router = express.Router();

const Home = require('../models/Home');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/home', function(req, res, next) {

  Home.find()
  .then(function(home) {
    res.json(home);
  })
  .catch(function(err) {
    res.json({ error: err.message });
  });

  
});

module.exports = router;
