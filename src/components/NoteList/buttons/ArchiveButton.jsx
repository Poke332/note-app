import React from "react";
import { Button } from "react-bootstrap";

function ArchiveButton({id, archived, onArchived}) {
  return <Button variant="outline-warning" onClick={() => onArchived(id)}>{
    archived ? "Pindahkan" : "Arsipkan"
  }</Button>
}

export default ArchiveButton;