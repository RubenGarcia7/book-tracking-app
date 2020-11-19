import React, { Component } from 'react'
import BookShelf from './BookShelf'

class Book extends Component {
  state = {
    shelf: 'none',
    id: this.props.id
  }

  onSelectChange = (e) => {
    this.setState({
      shelf: e.target.value,
    })

    this.props.onChange(this.state.shelf, this.state.id)
  }

  render() {

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url('${this.props.bookImg}')`}}></div>
            <div className="book-shelf-changer">
              <select value={this.state.shelf} onChange={this.onSelectChange}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">'{this.props.title}'</div>
          <div className="book-authors">{this.props.author}</div>
        </div>
      </li>
 
    )
  }
}

export default Book