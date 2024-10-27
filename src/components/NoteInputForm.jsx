import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

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
    this.props.addNote(this.state)
    this.setState({title: '', body: ''});
  }

  render() {
    return (
      <Form className='d-grid' onSubmit={this.onSubmitEventHandler}>
        <Form.Group className='note-input-title-container' controlId="noteinput.ControlInput1">
          <FloatingLabel className='text-white' controlId="floatingInput1" label="Judul">
            <Form.Control className='input' type="text" placeholder="" value={this.state.title} onChange={this.onTitleChangeEventHandler} required/>
          </FloatingLabel>
          <p className='text-end text-white'>Sisa Karakter: {this.maxLength - this.state.title.length}</p>
        </Form.Group>
        <Form.Group className='note-input-title-container mb-2' controlId='noteinput.ControlInput2'>
          <FloatingLabel className='text-white' controlId='floatingInput2' label="Deskripsi Catatan">
            <Form.Control 
              as="textarea" className="input text-white" type="text" placeholder="" 
              value={this.state.body} 
              onChange={this.onNoteChangeEventHandler} 
              style={{height: '20vh'}}
              required/>
          </FloatingLabel>
        </Form.Group>
        <Button variant="outline-light" type="submit" size="s">Tambahkan Catatan</Button>
      </Form>
    )
  }
}

export default NoteInputForm;