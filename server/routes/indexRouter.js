const express = require('express');
const router = express.Router();
const formRouter = require('./formRout');
const blogRouter = require('./blogRout');
const aboutPageRoute = require('./aboutPageRoute');
// Mount formRouter for handling form routes
router.use('/blogs', formRouter);
// Mount blogRouter for handling blog routes
router.use('/blogs', blogRouter);
//Mount aboutPageRoute for handling about page route
router.use('/about', aboutPageRoute);

module.exports = router;