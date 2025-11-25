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

// Route to create a new blog
// apply multer to the POST handler so form multipart data (including file) is parsed
router.post("/", upload.single("media"), blogController.createBlog);

module.exports = router;
