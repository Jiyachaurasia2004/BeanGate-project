const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/auth');
const { createInvoice, getInvoices } = require('../controllers/invoiceController');

router.post('/', auth, createInvoice);
router.get('/', auth, getInvoices);

module.exports = router;
