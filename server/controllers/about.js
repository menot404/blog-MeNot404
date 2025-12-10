
// CREATE - About Page

const createAboutPage = (req, res) => {
    res.render('pages/about', { title: 'About Us' });
}

module.exports = {
    createAboutPage
}