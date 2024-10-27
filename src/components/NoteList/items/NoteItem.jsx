import React from 'react';
import Card from 'react-bootstrap/Card';
import NoteItemBody from './NoteItemBody';
import NoteItemHeader from './NoteItemHeader';
import NoteItemButtons from './NoteItemButtons';

function NoteItem({id, title, body, createdAt, archived, onDelete, onArchived, formatDate}) {
  return (
    <Card className='note-item container-fluid'>
      <Card.Body className='d-flex flex-column justify-content-between gap-3'>
        <div>
          <NoteItemHeader title={title} createdAt={createdAt} formatDate={formatDate}/>
          <NoteItemBody body={body} />
        </div>
        <NoteItemButtons id={id} archived={archived} onArchived={onArchived} onDelete={onDelete}/>
      </Card.Body>
    </Card>
  )
}

export default NoteItem;