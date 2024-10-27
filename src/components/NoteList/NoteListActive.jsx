import React from "react";
import NoteItem from "./items/NoteItem";

function NoteListActive({ notes, onDelete, onArchived, formatDate }) {
  const activeNotes = notes.filter((note) => note.archived === false)
  return (
    <div className="container-fluid">
      <h2>Catatan Aktif</h2>
      <div className="note-list container-fluid d-flex flex-wrap justify-content-center gap-3">
        {
          activeNotes.length > 0 ? (        
            activeNotes.map((note) => (
              <NoteItem 
              key={note.id}
              id={note.id}
              onDelete={onDelete}
              onArchived={onArchived}
              formatDate={formatDate}
              {...note} />)
          )) : (
            <p className="no-notes">Tidak Ada Catatan</p>
          )
        }
      </div>
    </div>
  )
}

export default NoteListActive;