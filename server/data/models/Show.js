const mongoose = require('mongoose');

const ShowSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
    required: true
  }
});

module.exports = mongoose.model('Show', ShowSchema);