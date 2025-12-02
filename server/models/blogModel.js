const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema =  new Schema({
    title: {
        type: String,
        required: true
    },
    snippet:{
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    },
<<<<<<< HEAD
    media:{
        data: Buffer,
        contentType: String
    }
=======
>>>>>>> main
}, {timestamps: true});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
