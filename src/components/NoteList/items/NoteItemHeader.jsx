import React from "react";

function NoteItemHeader({title, createdAt, formatDate}) {
  return (
    <div className="note-item__header">
      <h3>{title}</h3>
      <p className="created-date">{formatDate(createdAt)}</p>
    </div>
  )
}

export default NoteItemHeader;