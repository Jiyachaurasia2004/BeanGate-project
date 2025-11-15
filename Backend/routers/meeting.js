const express = require('express');
const router = express.Router();
const {auth}  = require('../middleware/auth');
const {createMeeting, getMeetings}  = require('../controllers/meetingController'); 


router.post('/', auth, createMeeting);
router.get('/', auth, getMeetings);
module.exports = router;
