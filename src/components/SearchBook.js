import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BooksGrid from './BooksGrid';

class SearchBook extends Component {
    
    state = {
        query: ''
    }
    updQuery(query) {
        console.log(query)
        this.setState({query: query})
        this.props.searchBook(query)
    }
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
                                value={this.state.query}
                                onChange={(event) => this.updQuery(event.target.value)}
                            />
                        </div>
                    </div>
                    <div className="search-books-results">
                        {console.log("yo",this.props.result)}
                            <BooksGrid
                                books={this.props.result}
                                changeShelf={this.props.changeShelf} 
                            />
                    </div>
                </div>
          </div>
        )
    }
}

export default SearchBook