import React from "react";
import ArchiveButton from "../buttons/ArchiveButton";
import DeleteButton from "../buttons/DeleteButton";

function NoteItemButtons({id, archived, onArchived, onDelete}) {
  return (
    <div className="note-item__buttons">
      <ArchiveButton id={id} onArchived={onArchived} archived={archived}/>
      <DeleteButton id={id} onDelete={onDelete}/>
    </div>
  )
}

export default NoteItemButtons;