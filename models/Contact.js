const mongoose = require('mongoose');

const Contact = mongoose.Schema({

  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
  },
  object: String,
  message: String,

})

module.exports = mongoose.model('Contact', Contact);