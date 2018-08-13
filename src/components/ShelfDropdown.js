import React, { Component } from 'react'

class ShelfChanger extends Component {

  render() {
    const { book, books, changeShelf } = this.props
    
    let currentShelf = 'none'

    for (let item of books ) {
      if (item.id === book.id)  {
        currentShelf = item.shelf
        if(typeof currentShelf === "undefined" ){
          currentShelf = 'none'
        }
      } 
    }
    console.log("SHELF",books)
    return (
      <div className="book-shelf-changer">
        <select onChange={(event) => changeShelf(book, event.target.value)}
          defaultValue={ currentShelf }>
          <option disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }

}

export default ShelfChanger