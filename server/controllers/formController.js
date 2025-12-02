<<<<<<< HEAD
const Blog = require("../models/blogModel")
=======

>>>>>>> main
// Create - Show create form
const  showForm = async(req, res)=>{
    res.render('create', {title: 'Create a new Blog'});
}
<<<<<<< HEAD

// UPDATE - Show update form
const showFormUpdate = async(req, res)=>{
    const blogId = req.params.id;
    try {
        const blog = await Blog.findById(blogId)
        if (!blog) {
            res.status(404).send("Blog Not Found");
        }
        res.render("update", {blog, title: "Edit Blog"})
    } catch (error) {
        res.status(500).send('Error retrieving blog for update');
    }
}

module.exports = {
    showForm,
    showFormUpdate,
=======
module.exports = {
    showForm
>>>>>>> main
}