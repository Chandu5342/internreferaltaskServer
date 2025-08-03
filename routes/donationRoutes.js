const express = require('express');
const router = express.Router();
const { createDonation, getUserDonations, getTotalRaised } = require('../Controller/donationController');
const auth = require('../middleware/authMiddleware');

router.post('/', auth, createDonation);
router.get('/', auth, getUserDonations);
router.get('/total', auth, getTotalRaised);

module.exports = router;
