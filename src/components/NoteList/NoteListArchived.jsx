import React from "react";
import NoteItem from "./items/NoteItem";

function NoteListArchived({ notes, onDelete, onArchived, formatDate }) {
  const archivedNotes = notes.filter((note) => note.archived === true)
  return (
    <div className="container-fluid">
      <h2>Arsip</h2>
      <div className="note-list container-fluid d-flex justify-content-center flex-wrap gap-3">
        {
          archivedNotes.length > 0 ? (        
            archivedNotes.map((note) => (
              <NoteItem 
              key={note.id}
              id={note.id}
              onDelete={onDelete}
              onArchived={onArchived}
              formatDate={formatDate}
              {...note} />)
          )) : (
            <p>Tidak Ada Catatan</p>
          )
        }
      </div>
    </div>
  )
}

export default NoteListArchived;