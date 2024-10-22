import React from "react";

class NoteSearchHeader extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searched: ''
    }
  }

  render() {
    return (
      <header>
        <h1>Notes</h1>
        <form className="note-search-form">
          <input type="text" placeholder="Cari Catatan..." value={this.state.searched} />
        </form>
      </header>
    )
  }
}

export default NoteSearchHeader;