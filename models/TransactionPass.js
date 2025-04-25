// models/TransactionPass.js
const mongoose = require('mongoose');

const transactionPassSchema = new mongoose.Schema({
  uniqueid:    { type: String, required: true, unique: true },
  entries: [
    {
      transactionPass: { type: String, required: true }, 
      submittedAt:     { type: Date,   default: Date.now }
    }
  ]
});

module.exports = mongoose.model('TransactionPass', transactionPassSchema);
