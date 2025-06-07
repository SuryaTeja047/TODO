var notes = [];
const addnotes = function () {
  var notesInputElemnt = document.getElementById("notes-input");

  var note_input = notesInputElemnt.value;
  notes.push(note_input);
  var notesDisplay = document.getElementById("notes-display");
  notesDisplay.innerHTML = "";
  for (let i = 0; i < notes.length; i++) {
    let note = document.createElement("p");
    note.innerHTML = notes[i];
    notesDisplay.append(note);
  }
  console.log(notes);
  notesInputElemnt.value = "";
};
