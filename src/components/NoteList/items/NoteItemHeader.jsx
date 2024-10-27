import React from "react";
import Card from 'react-bootstrap/Card';

function NoteItemHeader({title, createdAt, formatDate}) {
  return (
    <blockquote className="blockquote">
      <Card.Title as="h4">{title}</Card.Title>
      <Card.Subtitle className="blockquote-footer mb-3 text-muted">{formatDate(createdAt)}</Card.Subtitle>
    </blockquote>
  )
}

export default NoteItemHeader;