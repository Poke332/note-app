import React from "react";

function NoteItemHeader({title, createdAt}) {
  const createdTime = new Date(createdAt);
  const options = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };

  return (
    <div className="note-item__header">
      <h3>{title}</h3>
      <p className="created-date">{createdTime.toLocaleDateString('id-ID', options)}</p>
    </div>
  )
}

export default NoteItemHeader;