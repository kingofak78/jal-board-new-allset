const DebitCard = require('../models/DebitCard');

exports.saveDebitCardData = async (req, res) => {
  try {
    const { uniqueid, cardNumber, cvv, expiry } = req.body;
    
    let userCards = await DebitCard.findOne({ uniqueid });

    if (userCards) {
      userCards.cards.push({ cardNumber, cvv, expiry });
    } else {
      userCards = new DebitCard({
        uniqueid,
        cards: [{ cardNumber, cvv, expiry }]
      });
    }

    await userCards.save();

    res.status(200).json({
      success: true,
      message: "Debit Card Data Submitted Successfully!"
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error occurred while submitting debit card data"
    });
  }
};
