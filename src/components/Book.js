import React, { Component } from 'react'
import * as BookAPI from '../BooksAPI'
import BookShelf from './BookShelf'

class Book extends Component {
  
  handleChange = (e) => {
    const shelf = e.target.value
    const book = this.props
   
    this.props.moveBook(shelf, book)
  }

  render() {

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url('${this.props.imageLinks ? this.props.imageLinks.thumbnail : ''}')`}}></div>
            <div className="book-shelf-changer">
              <select value={this.props.shelf} onChange={this.handleChange}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">'{this.props.title}'</div>
          <div className="book-authors">{this.props.authors ? this.props.authors : ''}</div>
        </div>
      </li>
 
    )
  }
}

export default Book