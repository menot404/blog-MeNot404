const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");
const multer = require("multer");

// store in memory so controller can access file.buffer
const upload = multer({ storage: multer.memoryStorage() });

// Route to get all blogs
router.get("/", blogController.getAllBlogs);

// Route to get a single blog by ID
router.get("/:id", blogController.getBlogById);

// Route to update a single blog by ID
// accept multipart form with optional 'media' file for updates
router.post("/:id", upload.single("media"), blogController.updateOnBlog);

// Route to create a new blog
// apply multer to the POST handler so form multipart data (including file) is parsed
router.post("/", upload.single("media"), blogController.createBlog);

// Route to delete a blog by ID
router.post("/:id/delete", blogController.deleteBlogById);

module.exports = router;
