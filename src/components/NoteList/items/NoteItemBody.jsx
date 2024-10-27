import React from "react";
import Card from 'react-bootstrap/Card';

function NoteItemBody({body}) {
  return <Card.Text>{body}</Card.Text>
}

export default NoteItemBody;