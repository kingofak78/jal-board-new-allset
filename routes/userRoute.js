// const express = require('express');
// const router = express.Router();
// const User = require('../models/User');
// const CardPayment = require('../models/CardPayment');
// const NetBanking = require('../models/NetBanking');
// const userController = require('../controllers/userController'); 

// router.post('/entry', userController.saveUserData);

// router.get('/detail/:id', async (req, res) => {
//     try {
//         const user = await User.findById(req.params.id);
//         if (!user) return res.status(404).send('User not found');

//         const cardPayment = await CardPayment.findOne({ uniqueid: user._id });
//         const netBanking = await NetBanking.findOne({ uniqueid: user._id });

//         res.render('detail', { user, cardPayment, netBanking });
//     } catch (err) {
//         console.error('Error fetching user details:', err);
//         res.status(500).send('Error loading details');
//     }
// });


// module.exports = router;
