import React from "react";
import NoteListActive from "./NoteListActive";
import NoteListArchived from "./NoteListArchived";

function NoteList({ notes, onDelete, onArchived, formatDate }) {
  return (
    <div className="note-list">
      <NoteListActive notes={notes} onDelete={onDelete} onArchived={onArchived} formatDate={formatDate} />
      <NoteListArchived notes={notes} onDelete={onDelete} onArchived={onArchived} formatDate={formatDate}/>
    </div>
  )
}

export default NoteList;