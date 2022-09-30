const path = require('path');
const router = require('express').Router();
// Router() is a middleware module of express that will define the routes to send to the main app

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

module.exports = router;