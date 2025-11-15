const express = require('express');
const router = express.Router();

const authrouter = require('../controllers/auth');
const upload = require('../middleware/multer');
const validate = require('../middleware/validator');
const {registerSchema,loginSchema, newPasswordSchema} = require('../modules/validators');

router.get('/', (req, res) => {
  res.send('Auth Route');
});

router.post(
  '/register',
  validate(registerSchema),
  authrouter.registerUser
);

router.post('/login',validate(loginSchema),  authrouter.loginUser);
router.post('/forget-password', authrouter.handleForgetPassword);
router.post('/verify-otp', authrouter.handleVerifyOTP);
router.post('/reset-password', authrouter.handleResetPassword);
router.get("/logout",authrouter.logout);
module.exports = router;
