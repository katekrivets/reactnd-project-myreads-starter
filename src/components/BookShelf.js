
import React, { Component } from 'react'
import BooksGrid from './BooksGrid'

class BookShelf extends Component {
    render() {
        const {books} = this.props
        
        const bookShelves = [
            {shelf: 'currentlyReading', name: 'Currently Reading'},
            {shelf: 'wantToRead', name: 'Want To Read'},
            {shelf: 'read', name: 'Read'}
        ]
        console.log(books)
        return (
            <div>
                {bookShelves.map((shelf, index) => {
                    let filteredBooks = books.filter(book => book.shelf === shelf.shelf)
                    return (
                        <div key={shelf.shelf} className="bookshelf" >
                            <h2 className="bookshelf-title">{shelf.name}</h2>
                            <div className="bookshelf-books">
                                <BooksGrid books={filteredBooks}/>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default BookShelf