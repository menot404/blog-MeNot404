// BlogPage Route

const express  = require('express');
const router = express.Router();
const aboutController = require('../controllers/about');

// Route to get About Page
router.get('/', aboutController.createAboutPage);

module.exports = router;