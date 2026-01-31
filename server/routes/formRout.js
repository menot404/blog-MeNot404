const formController = require("../controllers/formController");
const express = require("express");
const router = express.Router();
// CREATE - Afficher le formulaire de création
router.get("/create", formController.showForm);

router.get("/update/:id", formController.showFormUpdate);

module.exports = router;
