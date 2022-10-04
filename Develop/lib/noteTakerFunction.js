const fs = require('fs');
const path = require('path');
// I am not sure this is working correctly. These functions check the strings to write or to delete by a unqiue id. 
function newNoteTaken(newNoteText, noteString) {
    noteString.push(newNoteText);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({
            notes: noteString
        })
    )
    return newNoteText;
};

function deleteNoteTaken(noteString, id) {
    let deleteNote = parseInt(id);
    noteString.slpice(deleteNote, 1);
    for(let i = deleteNote; i < noteString.length; i++){
        noteString[i].id = i.toString();
    };
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({
            notes: noteString
        })
    )
}
module.exports = {
    newNoteTaken,
    deleteNoteTaken
};
