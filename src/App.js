import React from 'react'
import { Route } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import * as BookAPI from './BooksAPI'
import AppTitle from './components/AppTitle'
import SearchButton from './components/SearchButton'
import SearchScreen from './components/SearchScreen'
import BookShelf from './components/BookShelf'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  onSearchSubmit = (term) => {(
    BookAPI.search(term)
    .then(data => {
      if (data !== undefined) {
        if (!data.error) {
            this.setState({books: data})
            console.log(this.state.books)
        }
      }
    })
  )}

  changeShelf = (shelf, id) => {
    console.log(shelf, id)
  }

  render() {
    return (
      <div>
        <Route exact path='/' render={() => (
          <div>
            <AppTitle appName="MyReads App"/>
            <BookShelf shelfName="Currently Reading"/>
            <BookShelf shelfName="Want to Read"/>
            <BookShelf shelfName="Read"/>
            <SearchButton />
          </div>
        )} />
        <Route path='/search' render={() => (
          <div>
            <SearchScreen books={this.state.books} onSubmit={this.onSearchSubmit} onChange={this.changeShelf} />
          </div>
        )} />
      </div>
    )
  }
}

export default BooksApp
