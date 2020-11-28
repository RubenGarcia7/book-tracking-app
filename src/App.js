import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import * as BookAPI from './BooksAPI'
import Home from './views/Home'
import Search from './views/Search'

class App extends React.Component {
  state = {
    books: [],
    currentlyReading: [],
    wantToRead: [],
    read: []
  }

  // Main function that sets the state after each getAll API call
  addBooks = (books) => {
    const currentlyReading = books.filter(book => book.shelf === 'currentlyReading')
    const wantToRead = books.filter(book => book.shelf === 'wantToRead')
    const read = books.filter(book => book.shelf === 'read')

    this.setState({books, currentlyReading, wantToRead, read})
  }

  render() {
    const { books, currentlyReading, wantToRead, read} = this.state

    return (
      <>
          <Route exact path='/'>
            <Home books={books} currentlyReading={currentlyReading} wantToRead={wantToRead} read={read} addBooks={this.addBooks}/>
          </Route> 
          <Route exact path='/search'>
            <Search books={books} currentlyReading={currentlyReading} wantToRead={wantToRead} read={read} addBooks={this.addBooks}/>
          </Route>
      </>
    )
  }
}

export default App
