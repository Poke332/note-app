import React from "react";
import NoteItem from "./items/NoteItem";

function NoteListArchived({ notes, onDelete, onArchived }) {
  const archivedNotes = notes.filter((note) => note.archived === true)
  return (
    <div className="note-list__active">
      <h2>Arsip</h2>
      {
        archivedNotes.length > 0 ? (        
          archivedNotes.map((note) => (
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

export default NoteListArchived;