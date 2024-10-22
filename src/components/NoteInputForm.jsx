import React from 'react';

class NoteInputForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    }
    this.maxLength = 50;

    this.onNoteChangeEventHandler = this.onNoteChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const input = event.target.value

    if (input.length <= this.maxLength) {
      this.setState(() => {
        return {
          title: input
        }
      });
    }
  } 

  onNoteChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      }
    });
  }
  
  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <form className='note-input__form' onSubmit={this.onSubmitEventHandler}>
        <div>
          <p>Sisa Karakter: {this.maxLength - this.state.title.length}</p>
          <input type="text" placeholder="Judul" value={this.state.title} onChange={this.onTitleChangeEventHandler} />
        </div>
        <input type="text" placeholder="Tambahkan Catatan" value={this.state.body} onChange={this.onNoteChangeEventHandler} />
        <button type="submit">Tambahkan Catatan</button>
      </form>
    )
  }
}

export default NoteInputForm;