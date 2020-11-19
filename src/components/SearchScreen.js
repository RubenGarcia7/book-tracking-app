import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SearchResults from './SearchResults'


class SearchScreen extends Component {
  state = {
    term: ''
  } 

  onInputChange = (query) => {
    this.setState(() => ({
      term: query
    }))

    console.log(this.state.term)
    this.props.onSubmit(this.state.term)
  }

  onFormSubmit = e => {
    e.preventDefault()
  
  }

  render() {
    const { term } = this.state
    const { books } = this.props

    const showingBooks = term === ''
    ? []
    : this.props.books

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
              {/*
                NOTES: The search from BooksAPI is limited to a particular set of search terms.
                You can find these search terms here:
                https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                you don't find a specific author or title. Every search is limited by search terms.
              */}
              <form onSubmit={this.onFormSubmit}>
                <input value={this.state.term} type="text" placeholder="Search by title or author" onChange={(e) => this.onInputChange(e.target.value)} />
              </form>
            </div>
          </div>
        </div>

        <SearchResults books={showingBooks} />
      </>
    )
  }
}

export default SearchScreen