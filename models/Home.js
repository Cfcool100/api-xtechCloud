const mongoose = require('mongoose')

const Home = mongoose.Schema({
  title: String,
  desc: String,
});

module.exports = mongoose.model('Home', Home);