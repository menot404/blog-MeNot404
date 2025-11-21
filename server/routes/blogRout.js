const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

// Route to get all blogs
router.get('/', blogController.getAllBlogs);

// Route to get a single blog by ID
router.get('/:id', blogController.getBlogById);

// Route to create a new blog
router.post('/', blogController.createBlog);

module.exports = router;
