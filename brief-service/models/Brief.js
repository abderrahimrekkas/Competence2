const mongoose = require('mongoose');

const briefSchema = new mongoose.Schema({
  titre: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  competences: [
    {
      type: String,
      trim: true
    }
  ]
}, {
  timestamps: true
});

module.exports = mongoose.model('Brief', briefSchema);
