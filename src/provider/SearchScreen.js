// import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import Book from './Book'

// class SearchScreen extends Component {
//   state = {
//     term: ''
//   } 

//   onInputChange = (query) => {
//     this.setState(() => ({
//       term: query
//     }))

//     console.log(this.state.term)
//     this.props.onSubmit(this.state.term)
//   }

//   onFormSubmit = e => {
//     e.preventDefault()
//   }

//   handleChange = (book) => {(
//     this.props.onChange(book)
//   )}

//   render() {
//     const { term } = this.state
//     const { books } = this.props

//     const showingBooks = term === ''
//     ? []
//     : this.props.books

//     // const showingBooks = term === ''
//     // ? []
//     // : books.filter((book) => (
//     //   book.title.toLowerCase().includes(term.toLowerCase())
//     // ))

//     // console.log(showingBooks)
    
//     return (
//       <>
//         <div className="search-books">
//           <div className="search-books-bar">
//             <Link 
//               to="/"
//             >
//               <button className="close-search">Close</button>
//             </Link>
//             <div className="search-books-input-wrapper">
//               <form onSubmit={this.onFormSubmit}>
//                 <input value={this.state.term} type="text" placeholder="Search by title or author" onChange={(e) => this.onInputChange(e.target.value)} />
//               </form>
//             </div>
//           </div>
//         </div>
//         {/* <SearchResults books={showingBooks}/> */}
//         <div className="search-books-results">
//           <ol className="books-grid">
//             {showingBooks.map((book) => {
//                 return !book.imageLinks ?
//                 (
//                   <Book
//                     key={book.id}
//                     id={book.id}
//                     title={book.title}
//                     author={book.authors}
//                     onChange={this.handleChange}
//                   />
//                 )
//                 : (
//                   <Book
//                     key={book.id}
//                     id={book.id}
//                     title={book.title}
//                     author={book.authors}
//                     bookImg={book.imageLinks.thumbnail}
//                     onChange={this.handleChange}
//                   />
//                 )
//             })} 
//           </ol>
//         </div>
//       </>
//     )
//   }
// }

// export default SearchScreen