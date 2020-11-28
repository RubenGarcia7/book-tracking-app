import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BookAPI from '../BooksAPI'
import Book from '../components/Book'

class Search extends Component {
  state = {
    term: '',
    books: []
  } 

  // Get all books afer component has mounted
  async componentDidMount() {
    try {
      const books = await BookAPI.getAll()
      this.props.addBooks(books);
    }

    catch(err) {
      console.log(err)
    }
  } 

  // Update state while typing and send API search request
  onInputChange = async (query) => {
    try {
      this.setState({term: query})

      const results = await BookAPI.search(this.state.term)

      if (results.error) {
        this.setState({books: []})
      } else {
        this.setState({books: results})
      }
    }

    catch(err) {
      console.log(err)
    }
  }

  onFormSubmit = e => {
    e.preventDefault()
  }

  // Update book to a new shelf and get updated book list from API to reflect the changes
  moveBook = async (shelf, book) => {
    try {
      const response = await BookAPI.update(book, shelf)
    }

    catch(err) {
      console.log(err)
    }
  }


  render() {
    const { term } = this.state
    const { books } = this.props
    
    // Conditional to ensure no results are displayed if the search bar is empty
    const showingBooks = term === ''
    ? []
    : this.state.books

    return (
      <>
        <div className="search-books">
          <div className="search-books-bar">
            <Link 
              to="/"
            >
              <button className="close-search">Close</button>
            </Link>
            <div className="search-books-input-wrapper">
              <form onSubmit={this.onFormSubmit}>
                <input value={this.state.term} type="text" placeholder="Search by title or author" onChange={(e) => this.onInputChange(e.target.value)} />
              </form>
            </div>
          </div>
        </div> 
        <div className="search-books-results">
          <ol className="books-grid">
            {/* This makes sure that if a book returned from the search results is already in the app, the correct shelf option is preselected */}
            {showingBooks.map((book) => {
              const matchShelf = this.props.books.find((bookSearch) => {
                return bookSearch.id === book.id
              })

              if(matchShelf) {
                book.shelf = matchShelf.shelf
              } else {
                book.shelf = 'none'
              }

              return (
                  <Book key={book.id} {...book} moveBook={this.moveBook}
                  />
                )
            })} 
          </ol>
        </div>
      </>
    )
  }
}

export default Search