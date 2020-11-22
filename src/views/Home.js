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


  render() {
    return (
      <>
          <AppTitle appName="MyReads App"/>
          <BookShelf shelfName="Currently Reading" books={this.props.currentlyReading}/>
          <BookShelf shelfName="Want to Read" books={this.props.wantToRead}/>
          <BookShelf shelfName="Read" books={this.props.read}/>
          <SearchButton />
      </>
    )
  }
}

export default Home