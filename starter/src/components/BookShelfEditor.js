import React from "react";
import { useEffect } from "react";

const BookShelfEditor=({book,shelf})=>{
    useEffect(()=>{console.log( book, shelf)},[])
    return(
        <div className="book-shelf-changer">
        <select value={shelf.shelf} onChange={()=>console.log("BookShelfEditor")}>
          <option value="none" disabled>
            Move to...
          </option>
          <option value="currentlyReading">
            Currently Reading
          </option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );

}

export default BookShelfEditor;