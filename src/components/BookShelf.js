
import React, { Component } from 'react'
import BooksGrid from './BooksGrid'

class BookShelf extends Component {
    render() {
        const {books, changeShelf} = this.props
        
        const bookShelves = [
            {shelf: 'currentlyReading', name: 'Currently Reading'},
            {shelf: 'wantToRead', name: 'Want To Read'},
            {shelf: 'read', name: 'Read'}
        ]
        return (
            <div>
                {bookShelves.map((shelf, index) => {
                    let filteredBooks = books.filter(book => book.shelf === shelf.shelf)
                    return (
                        <div key={shelf.shelf} className="bookshelf" >
                            <h2 className="bookshelf-title">{shelf.name}</h2>
                            <div className="bookshelf-books">
                                <BooksGrid 
                                books={filteredBooks}
                                changeShelf={changeShelf}
                                />
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default BookShelf