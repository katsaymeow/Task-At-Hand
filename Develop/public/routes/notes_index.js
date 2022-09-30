const router = require('express').Router();
const notesRoutes = require('./notes_html');
const notes = require('../../db/db.json');

const {
    newNoteTaken, deleteNoteTaken
} = require('../../lib/noteTakerFunction');

router.use(notesRoutes);

router.get('/notes', (req, res) => {
    let save = notes;
    res.json(save);
})
router.post('notes', (req, res) => {
    req.body.id = notes.length.toString();
    let note = newNoteTaken(req.body, notes);
    res.json(note);
})
router.delete('/notes/:id', (req, res) => {
    deleteNoteTaken(notes, req.params.id);
    res.json(notes);
})

module.exports = router;