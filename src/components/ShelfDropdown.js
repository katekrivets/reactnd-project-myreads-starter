import React, { Component } from 'react'

class ShelfChanger extends Component {

  render() {
    const { book, books, allbooks, changeShelf } = this.props
    
    let currentShelf = 'none'
    let [...arr] = books
    
    if(allbooks) {
      arr = allbooks
    }
    for (let item of arr ) {
      if (item.id === book.id)  {
        currentShelf = item.shelf
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