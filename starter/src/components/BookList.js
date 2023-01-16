import React from "react";
import Book from "./Book";

const BookList=({booklist})=>{
    return(
        <div className="bookshelf-books">
        <ol className="books-grid">
          {
            booklist.map(bk=>
                <li>
                    <Book book={bk}/>
                </li>
            )
          }
        </ol>
      </div>
    );
}

export default BookList;