
// Create - Show create form
const  showForm = async(req, res)=>{
    res.render('create', {title: 'Create a new Blog'});
}
module.exports = {
    showForm
}