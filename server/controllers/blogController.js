const Blog = require("../models/blogModel");
const moment = require("moment");

// Config moment to format us dates
moment.locale("en-us");

// Get all blogs
const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ createdAt: -1 });
        res.render("pages/home", { title: "All Blogs", blogs, moment });
    } catch (error) {
        res.status(500).send("Error retrieving blogs");
    }
};

// Get a single blog by ID
const getBlogById = async (req, res) => {
    const blogId = req.params.id;
    try {
        const blog = await Blog.findById(blogId);
        if (blog) {
            res.render("pages/blogDetail", { title: blog.title, blog });
        } else {
            res.status(404).send("Blog not found");
        }
    } catch (error) {
        res.status(500).send("Error retrieving blog");
    }
};

// POST a new blog
const createBlog = async (req, res) => {
    try {
        const blog = new Blog({
            title: req.body.title,
            snippet: req.body.snippet,
            body: req.body.body,
            // save uploaded file under `media` to match schema (server/models/blogModel.js)
            media: req.file
                ? {
                    data: req.file.buffer,
                    contentType: req.file.mimetype,
                }
                : null,
        });
        await blog.save();
        res.redirect("/api/v1/blogs");
    } catch (error) {
        console.error("createBlog error:", error);
        res.status(500).send("Error creating blog: " + (error.message || error));
    }
};

// Delete a blog by ID
const deleteBlogById = async (req, res) => {
    const blogId = req.params.id;
    try {
        await Blog.findByIdAndDelete(blogId);
        res.redirect(301, "/api/v1/blogs");
    } catch (error) {
        res.status(500).send("Error deleting blog");
        console.error("deleteBlogById error:", error);
    }
};

// UPDATE - Edit a blog

const updateOnBlog = async (req, res) => {
    const blogId = req.params.id;
    try {
        // Build updates object; only overwrite media when a new file was uploaded
        const updates = {
            title: req.body.title,
            snippet: req.body.snippet,
            body: req.body.body,
        };

        if (req.file) {
            updates.media = {
                data: req.file.buffer,
                contentType: req.file.mimetype,
            };
        }

        await Blog.findByIdAndUpdate(blogId, updates);
        res.redirect("/api/v1/blogs");
    } catch (error) {
        res.status(500).send("Error then update blog");
        console.error(error);
    }
};

module.exports = {
    getAllBlogs,
    getBlogById,
    createBlog,
    deleteBlogById,
    updateOnBlog,
};
