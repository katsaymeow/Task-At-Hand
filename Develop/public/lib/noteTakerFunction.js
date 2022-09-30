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

function deleteNoteTaken(deleteNoteText, noteString) {
    // not sure how to delete, need a loop to rewrite the saved info or is there a way to just remove the note deleted?
//     DELETE /api/notes/:id should receive a query parameter that contains the id of a note to delete. To delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.
// }
}
module.exports = newNoteTaken
module.exports = deleteNoteTaken