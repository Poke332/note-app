import React from "react";

class NoteSearchHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ''
    };

    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange(event) {
    this.onSearchHandler(event.target.value)
    this.setState(() => {
      return {
        search: event.target.value
      }
    });
  }

  render() {
    return (
      <header>
        <h1>Notes</h1>
        <form className="note-search-form">
          <input type="text" placeholder="Cari Catatan..." value={this.state.search} onChange={this.onSearchChange}/>
        </form>
      </header>
    )
  }
}

export default NoteSearchHeader;