import React from 'react';
import NoteInput from './NoteInput';
import NoteList from './NoteList/NoteList';
import NoteSearchHeader from './NoteSearchHeader';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    }

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: new Date().toISOString()
          }
        ]
      }
    });
  }

  onArchiveHandler(id) {
    const notes = this.state.notes.map((note) => {
      if (note.id === id && note.archived === false) {
        return { ...note, archived: true };
      }
      else if (note.id === id && note.archived === true) {
        return { ...note, archived: false };
      }
      return note;
    });
    this.setState({ notes });
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter(contact => contact.id !== id);
    this.setState({ notes });
  }

  render() {
    return (
      <>
        <NoteSearchHeader />
        <div className='note-app'>
          <NoteInput addNote={this.onAddNoteHandler} />
          <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler} onArchived={this.onArchiveHandler}/>
        </div>
      </>
    )
  }
}

export default NoteApp;