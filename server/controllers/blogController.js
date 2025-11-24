const Blog = require('../models/blogModel');

// Get all blogs
const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ createdAt: -1 });
        res.render('index', { title: 'All Blogs', blogs });
    } catch (error) {
        res.status(500).send('Error retrieving blogs');
    }
};

// Get a single blog by ID
const getBlogById = async (req, res) => {
    const blogId = req.params.id;
    try {
        
        const blog = await Blog.findById(blogId);
        if (blog) {
            res.render('blogDetail', { title: blog.title, blog });
        } else {
            res.status(404).send('Blog not found');
        }
    } catch (error) {
        res.status(500).send('Error retrieving blog');
    }
}

// POST a new blog
const createBlog = async(req, res)=>{
    //const {title, snippet, body} = req.body;
    try {
        const blog = new Blog(req.body);
        await blog.save();
        res.redirect('/api/v1/blogs');
    } catch (error) {
        res.status(500).send('Error creating blog');
    }
}

module.exports = {
    getAllBlogs,
    getBlogById,
    createBlog
}
