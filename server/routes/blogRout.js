const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");
const multer = require("multer");

// store in memory so controller can access file.buffer
// Add limits and a simple fileFilter to prevent huge uploads and unsupported types
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 20 * 1024 * 1024 }, // 20 MB max
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype.startsWith("image/") ||
      file.mimetype.startsWith("video/")
    ) {
      cb(null, true);
    } else {
      cb(new Error("Only image and video files are allowed"));
    }
  },
});

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
