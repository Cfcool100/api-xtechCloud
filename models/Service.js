const mongoose = require('mongoose');

const Service = mongoose.Schema({

  url_img: String,
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },

})

module.exports = mongoose.model('Service', Service
);