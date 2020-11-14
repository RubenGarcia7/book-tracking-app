import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SearchResult extends Component {
  render() {
    return (
      <div className="search-books-results">
        <ol className="books-grid"></ol>
      </div>
    )
  }
}

export default SearchResult

