var express = require('express');
var router = express.Router();

const Home = require('../models/Home');
const Service = require('../models/Service');
const Blog = require('../models/Blog');
const Contact = require('../models/Contact');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/home', function(req, res) {

  Home.find()
  .then(function(home) {
    res.json(home);
  })
  .catch(function(err) {
    res.json({ error: err.message });
  });
});
router.get('/services', function(req, res) {

  Service.find()
  .then(function(services) {
    res.json(services);
  })
  .catch(function(err) {
    res.json({ error: err.message });
  });

});
router.get('/blog', function(req, res) {

  Blog.find()
  .then(function(services) {
    res.json(services);
  })
  .catch(function(err) {
    res.json({ error: err.message });
  });

});

router.post('/contact', function(req, res) {
  let contact = new Contact({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message
  });

  contact.save()
    .then(function(savedContact) {
      res.json(savedContact);
    })
    .catch(function(err) {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;