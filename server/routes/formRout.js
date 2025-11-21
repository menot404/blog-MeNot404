const showForm = require('../controllers/formController');
const express = require('express');
const router = express.Router();

// CREATE - Afficher le formulaire de création
router.get('/create',  showForm.showForm);

module.exports = router;