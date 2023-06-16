const mongoose = require('mongoose');

const Blog = mongoose.Schema({

  url_img: String,
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  author: String,

})

module.exports = mongoose.model('Blog', Blog);