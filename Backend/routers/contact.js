const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact');


router.post('/submit', contactController.submitContactForm);
module.exports = router;