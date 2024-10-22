import React from "react";
import NoteInputForm from "./NoteInputForm";

function NoteInput({ addNote }) {
  return (
    <div className="note-input">
      <h2>Buat Catatan</h2>
      <NoteInputForm addNote={addNote} />
    </div>
  )
}

export default NoteInput;