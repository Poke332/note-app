import React from "react";
import NoteListActive from "./NoteListActive";
import NoteListArchived from "./NoteListArchived";

function NoteList({ notes, onDelete, onArchived }) {
  return (
    <div className="note-list">
      <NoteListActive notes={notes} onDelete={onDelete} onArchived={onArchived} />
      <NoteListArchived notes={notes} onDelete={onDelete} onArchived={onArchived} />
    </div>
  )
}

export default NoteList;