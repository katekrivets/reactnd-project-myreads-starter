import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchBook from './components/SearchBook'
import AllBooks from './components/AllBooks'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: [],
    found: []
  };

  componentWillMount() {
    this.getAllBooks()
  }
  
  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf
      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat(book)
      }))
    })
  }

  getAllBooks = () => {
    BooksAPI.getAll().then(books => this.setState({ books }))
  }
  searchBook = (query) => {
    if ( query === undefined || query === ''){
      this.setState({ found: [] });
      return;
    }
      BooksAPI.search(query).then((res) => {
          if(res) {
            if (res.constructor === Array) {
              this.setState({ found: res });
            } else {
              this.setState({ found: [] });
            }
          }
      });
      
  } 
  render() {
    return (
      <div className="app">
        <Route exact path='/' 
          render={() => (
            <AllBooks
              books={this.state.books}
              changeShelf={this.changeShelf}
            />
          )}
        />
        <Route path='/search' 
            render= {() => (
              <SearchBook
                searchBook={this.searchBook}
                allbooks={this.state.books}
                result={this.state.found}
                changeShelf={this.changeShelf}
              />
            )}
        />
      </div>
    )
  }
}

export default BooksApp
