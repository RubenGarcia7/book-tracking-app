import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BookAPI from '../BooksAPI'
import Book from '../components/Book'

class Search extends Component {
  state = {
    term: '',
    books: []
  } 

  async componentDidMount() {
    try {
      const books = await BookAPI.getAll()
      this.props.addBooks(books);
    }

    catch(err) {
      console.log(err)
    }
  } 

  onInputChange = async (query) => {
    try {
      this.setState({term: query})

      const results = await BookAPI.search(this.state.term)

      if (results.error) {
        this.setState({books: []})
      } else {
          this.setState({books: results})
      }

      console.log(results)
  }

    catch(err) {
      console.log(err)
    }
  }

  onFormSubmit = e => {
    e.preventDefault()
  }

  updateBooks = (response) => {
    
    this.props.addBooks(response);
  }



  render() {
    const { term } = this.state
    const { books } = this.props

    const showingBooks = term === ''
    ? []
    : this.state.books

    // const showingBooks = term === ''
    // ? []
    // : books.filter((book) => (
    //   book.title.toLowerCase().includes(term.toLowerCase())
    // ))

    // console.log(showingBooks)
    
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
                  <Book {...book} moveBook={this.updateBooks}
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