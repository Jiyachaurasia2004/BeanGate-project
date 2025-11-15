const express = require("express");
const router = express.Router();
const { getProfile, updateProfile } = require("../controllers/profileController");
const upload = require("../middleware/multer");


router.get("/:id", getProfile);
router.put("/:id", upload.single("profileImage"), updateProfile);

module.exports = router;
