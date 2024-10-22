import React from "react";

class NoteSearchHeader extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searched: ''
    };

    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange(event) {
    this.setState({ searched: event.target.value });
    this.props.onSearch(event.target.value);
  }

  render() {
    return (
      <header>
        <h1>Notes</h1>
        <form className="note-search-form">
          <input type="text" placeholder="Cari Catatan..." value={this.state.searched} onChange={this.onSearchChange}/>
        </form>
      </header>
    )
  }
}

export default NoteSearchHeader;