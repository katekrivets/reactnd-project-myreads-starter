import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchBook from './components/SearchBook'
import AllBooks from './components/AllBooks'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: []
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }
  changeShelf() {
    
  }
  // searchBook(book) {
  //   BooksAPI.search(book).then()
  // }
  render() {
    return (
      <div className="app">
      <Route exact path='/' render={() => (
        <AllBooks
          books={this.state.books}
        />
      )}/>
      <Route path='/search' component={SearchBook}/>
      </div>
    )
  }
}

export default BooksApp
