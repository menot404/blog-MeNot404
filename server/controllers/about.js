
// CREATE - About Page

const createAboutPage = (req, res) => {
    res.render('about', { title: 'About Us' });
}

module.exports = {
    createAboutPage
}