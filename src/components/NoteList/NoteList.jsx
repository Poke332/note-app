import React from "react";
import NoteListActive from "./NoteListActive";
import NoteListArchived from "./NoteListArchived";

function NoteList({ notes, onDelete, onArchived, formatDate }) {
  return (
    <section className="note-list d-flex flex-column gap-3">
      <NoteListActive notes={notes} onDelete={onDelete} onArchived={onArchived} formatDate={formatDate} />
      <NoteListArchived notes={notes} onDelete={onDelete} onArchived={onArchived} formatDate={formatDate}/>
    </section>
  )
}

export default NoteList;