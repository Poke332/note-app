import React from "react";

function ArchiveButton({id, archived, onArchived}) {
  return <button className="note-item__archive" onClick={() => onArchived(id)}>{
    archived ? "Pindahkan" : "Arsipkan"
  }</button>
}

export default ArchiveButton;