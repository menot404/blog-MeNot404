const express = require('express');
const connectDB = require('./server/data/configDB');
const router = require('./server/routes/indexRouter');

const app = express();
const PORT = 3000;
const localhost = 'http://localhost:'
const host =  'http://localhost:3000/'

// Middleware to serve static files
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
// register view engine
app.set('view engine', 'ejs')
app.set('views', './views')


// listen for requests
connectDB
    .then(() => {
        app.listen(PORT, () => {
        console.log(`🚀 Serveur démarré sur ${localhost}${PORT}`);
        console.log(`📝 Accédez à l'app: ${localhost}${PORT}/api/v1/blogs`);
    });
    })
    .catch((err) => {
    console.error(`❌ Erreur MongoDB: ${err}`);
    process.exit(1);
    });

// Use index router for handling routes
app.use('/api/v1', router);

// 404 page
app.use((req, res)=>{
    res.status(404).render('404', {title: '404'});
})