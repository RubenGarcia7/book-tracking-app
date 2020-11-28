import React, { Component } from 'react'
import * as BookAPI from '../BooksAPI'
import BookShelf from '../components/BookShelf'
import AppTitle from '../components/AppTitle'
import SearchButton from '../components/SearchButton'


class Home extends Component {

  async componentDidMount() {
    try {
      const books = await BookAPI.getAll()
      this.props.addBooks(books);
    }

    catch(err) {
      console.log(err)
    }
  } 

  moveBook = async (shelf, book) => {
    try {
      const response = await BookAPI.update(book, shelf)
      
      const books = await BookAPI.getAll()
      this.props.addBooks(books);
    }

    catch(err) {
      console.log(err)
    }
  }

  
  render() {
    return (
      <>
          <AppTitle appName="MyReads App"/>
          <BookShelf shelfName="Currently Reading" books={this.props.currentlyReading} moveBook={this.moveBook}/>
          <BookShelf shelfName="Want to Read" books={this.props.wantToRead} moveBook={this.moveBook}/>
          <BookShelf shelfName="Read" books={this.props.read} moveBook={this.moveBook}/>
          <SearchButton />
      </>
    )
  }
}

export default Home