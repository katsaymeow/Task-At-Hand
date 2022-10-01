const fs = require('fs');
const path = require('path');

function newNoteTaken(newNoteText, noteString) {
    noteString.push(newNoteText);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({
            notes: noteString
        })
    )
    return newNoteText
};

function deleteNoteTaken(notes, id) {
    
//     DELETE /api/notes/:id should receive a query parameter that contains the id of a note to delete. To delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.
// }
}
module.exports = {
    newNoteTaken,
    deleteNoteTaken
}
//method all notes just the one that matches the id just that one. filter().array. 