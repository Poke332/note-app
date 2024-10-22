import React from 'react';
import NoteItemBody from './NoteItemBody';
import NoteItemHeader from './NoteItemHeader';
import NoteItemButtons from './NoteItemButtons';

function NoteItem({id, title, body, createdAt, archived, onDelete, onArchived}) {
  return (
    <div className='note-item'>
      <NoteItemHeader title={title} createdAt={createdAt}/>
      <NoteItemBody body={body} />
      <NoteItemButtons id={id} archived={archived} onArchived={onArchived} onDelete={onDelete}/>
    </div>
  )
}

export default NoteItem;