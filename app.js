const express = require('express');

const app = express();
const PORT = 3000;
const localhost = 'localhost'
const host =  'http://localhost:3000/'

// Middleware to serve static files
app.use(express.static('public'));
// register view engine
app.set('view engine', 'ejs')
app.set('views', './views')


// listen for requests
app.listen(PORT, localhost, ()=>{
    console.log(`Server is running on port ${PORT}\nAccess it at: ${host}`);
})

app.get('/', (req, res)=>{
    res.render('index', {title: 'Home'});
})

app.get('/about', (req, res)=>{
    res.render('about', {title: 'About'});
})

app.get('/blogs/create', (req, res)=>{
    res.render('create', {title: 'Create a new Blog'});
})

// Redirect from /about-me to /about
app.get('/about-us', (req, res)=>{
    res.redirect(301, '/about');
})

// 404 page
app.use((req, res)=>{
    res.status(404).render('404', {title: '404'});
})