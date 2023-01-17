import React from "react";
import Book from "./Book";

const BookList=({booklist,shelf})=>{
    return(
        <div className="bookshelf-books">
        <ol className="books-grid">
          {
            booklist.map(bk=>
                <li>
                    <Book key={bk.id} book={bk} shelf={shelf}/>
                </li>
            )
          }
        </ol>
      </div>
    );
}

export default BookList;