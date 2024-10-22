import React from "react";
import NoteItem from "./items/NoteItem";

function NoteListActive({ notes, onDelete, onArchived }) {
  const activeNotes = notes.filter((note) => note.archived === false)
  return (
    <div className="note-list__active">
      <h2>Catatan Aktif</h2>
      {
        activeNotes.length > 0 ? (        
          activeNotes.map((note) => (
            <NoteItem 
            key={note.id}
            id={note.id}
            onDelete={onDelete}
            onArchived={onArchived}
            {...note} />)
        )) : (
          <p className="no-notes">Tidak Ada Catatan</p>
        )
      }
    </div>
  )
}

export default NoteListActive;