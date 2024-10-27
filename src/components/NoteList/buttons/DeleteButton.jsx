import React from "react";
import { Button } from "react-bootstrap";

function DeleteButton({id, onDelete}) {
  return <Button variant="outline-danger" onClick={() => onDelete(id)}>Delete</Button>
}

export default DeleteButton;