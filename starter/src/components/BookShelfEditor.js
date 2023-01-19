import React from "react";
import { useState } from "react";

const BookShelfEditor=({book,moveBook})=>{
  const[bookShelf,setBookShelf]= useState(book.shelf);
  const moveBookDynamically=(event)=>{
    const newShelf=event.target.value;
    setBookShelf(newShelf);
    moveBook(book,newShelf);
  };

    return(
        <div className="book-shelf-changer">
        <select value={bookShelf ? bookShelf : "none"} onChange={moveBookDynamically}>
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );

}

export default BookShelfEditor;