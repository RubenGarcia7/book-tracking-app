import React from 'react'
import { Link } from 'react-router-dom'

function SearchResults(props) {

  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {props.books.map((book) => {
            return !book.imageLinks ?
            (
              <>
                <li key={book.id}>
                  <h4>{book.title}</h4>
                  <p>No image available</p>
                </li>
              </>
            )
            : (
              <>
                <li key={book.id}>
                  <h4>{book.title}</h4>
                  <img src={book.imageLinks.thumbnail}></img>
                </li>
              </>
            )
        })} 
      </ol>
    </div>
  )
}

export default SearchResults

