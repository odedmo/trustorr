const mongoose = require('mongoose');

const ShowSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
    required: true
  },
  liked: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Show', ShowSchema);