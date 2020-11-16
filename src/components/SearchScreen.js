import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SearchResults from './SearchResults'

class SearchScreen extends Component {
  state = {
    term: ''
  } 

  onInputChange = (e) => {
    this.setState({
      term: e.target.value.trim()
    })
  }

  onFormSubmit = e => {
    e.preventDefault()
    this.props.onSubmit(this.state.term)
  }

  render() {
    // const { term } = this.state
    // const { books } = this.props

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
                <input value={this.state.term} type="text" placeholder="Search by title or author" onChange={this.onInputChange} />
              </form>
            </div>
          </div>
        </div>

        <SearchResults books={this.props.books} />
      </>
    )
  }
}

export default SearchScreen