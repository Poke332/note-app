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
    const searchQuery = event.target.value;
    this.setState({ search: searchQuery });
    this.props.onSearch(searchQuery);
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