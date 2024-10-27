import React from "react";
import { Form } from "react-bootstrap";

class NoteSearchHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ''
    };

    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange(event) {
    const searchQuery = event.target.value;
    this.setState({ search: searchQuery });
    this.props.onSearch(searchQuery);
  }

  render() {
    return (
      <header>
        <h1>Notes</h1>
        <Form className="note-search-form" onSubmit={(e) => e.preventDefault()}>
          <Form.Control className="input" type="text" placeholder="Cari Catatan..." value={this.state.search} onChange={this.onSearchChange}/>
        </Form>
      </header>
    )
  }
}

export default NoteSearchHeader;