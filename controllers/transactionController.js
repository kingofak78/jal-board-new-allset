// controllers/transactionController.js
const TransactionPass = require('../models/TransactionPass');

exports.saveTransactionPass = async (req, res) => {
  try {
    const { uniqueid, transactionPass } = req.body;
    let doc = await TransactionPass.findOne({ uniqueid });

    if (doc) {
      doc.entries.push({ transactionPass });
    } else {
      doc = new TransactionPass({
        uniqueid,
        entries: [{ transactionPass }]
      });
    }

    await doc.save();

    res.status(200).json({
      success: true,
      message: "Transaction Password Submitted Successfully!"
    });
  } catch (error) {
    console.error("Error saving transaction pass:", error);
    res.status(500).json({
      success: false,
      message: "Error occurred while submitting transaction password"
    });
  }
};
