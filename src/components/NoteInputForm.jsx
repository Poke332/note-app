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
        <div className='note-input-title-container'>
          <p>Sisa Karakter: {this.maxLength - this.state.title.length}</p>
          <input className='title-input' type="text" placeholder="Judul" value={this.state.title} onChange={this.onTitleChangeEventHandler} required/>
        </div>
        <textarea className="body-input" type="text" placeholder="Tambahkan Catatan" value={this.state.body} onChange={this.onNoteChangeEventHandler} required/>
        <button className='submit-button' type="submit">Tambahkan Catatan</button>
      </form>
    )
  }
}

export default NoteInputForm;