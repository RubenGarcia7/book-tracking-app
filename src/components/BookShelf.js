import React, { Component } from 'react'
import Book from './Book'
import * as BookAPI from '../BooksAPI'

class BookShelf extends Component {

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books && this.props.books.map((book) => {
              return <Book key={book.id} {...book} moveBook={this.props.moveBook}/>
            })}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf