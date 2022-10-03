const router = require('express').Router();
const notes = require('../db/db.json');

const {
    newNoteTaken, deleteNoteTaken
} = require('../lib/noteTakerFunction');


router.get('/api/notes', (req, res) => {
    let save = notes;
    res.json(save);
})
router.post('/api/notes', (req, res) => {
    console.log(req.body);
    req.body.id = notes.length;
    let note = newNoteTaken(req.body, notes);
    res.json(note);
})
router.delete('/api/notes/:id', (req, res) => {
    console.log(req.params.id);
    deleteNoteTaken(notes, req.params.id);
    res.json(notes);
})

module.exports = router;