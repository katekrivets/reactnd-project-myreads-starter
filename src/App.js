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

  componentDidMount() {
    console.log(this)
    this.getAllBooks()
  }
  
  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(this.getAllBooks)
  }

  getAllBooks = () => {
    BooksAPI.getAll().then(books => this.setState({ books: books }))
  }
  searchBook = (query) => {
      BooksAPI.search(query).then((res) => {
          if(res){
              console.log(res)
              this.setState({
                  found: res
              });
          }

      });
      
  } 
  render() {
    return (
      <div className="app">
      <Route exact path='/' render={() => (
        <AllBooks
          books={this.state.books}
          changeShelf={this.changeShelf}
        />
      )}/>
      <Route path='/search' 
        render= {() => (<SearchBook
        
        searchBook={this.searchBook}
        result={this.state.found}
        changeShelf={this.changeShelf}
        />)}
      />
      </div>
    )
  }
}

export default BooksApp
