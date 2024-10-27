import React from "react";
import ArchiveButton from "../buttons/ArchiveButton";
import DeleteButton from "../buttons/DeleteButton";
import { Card } from "react-bootstrap";

function NoteItemButtons({id, archived, onArchived, onDelete}) {
  return (
    <div className="d-grid gap-2">
      <ArchiveButton id={id} onArchived={onArchived} archived={archived}/>
      <DeleteButton id={id} onDelete={onDelete}/>
    </div>
  )
}

export default NoteItemButtons;