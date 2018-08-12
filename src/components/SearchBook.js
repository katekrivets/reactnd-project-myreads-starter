import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BooksGrid from './BooksGrid';

class SearchBook extends Component {
    
    updateQuery = (query) => {
        console.log(this.props.books)
        this.props.searchBook(query.trim());
    };

    render() {   
        return (
            <div>
                <div className="search-books">
                    <div className="search-books-bar">
                    <Link to='/' className="close-search">Close</Link>
                        <div className="search-books-input-wrapper">
                        <input
                                type="text"
                                placeholder="Search by title or author"
                                onChange={(event) => this.updateQuery(event.target.value)}
                            />
                        </div>
                    </div>
                    <div className="search-books-results">
                        <ol className="books-grid">
                        {/* {console.log("yo",this.props.result)}
                        {this.props.result.map((book) => (
                            <li key={book.id} className="contact-list-item">
                                <BooksGrid
                                    books={book}
                                    changeShelf={this.props.changeShelf} />
                            </li>
                        ))} */}
                        </ol>
                    </div>
                </div>
          </div>
        )
    }
}

export default SearchBook