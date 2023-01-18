import React from "react";
import BookList from "./BookList";

const SearchBooks=({books})=>{
    return(
        <div className="search-books">
           <div className="search-books-bar">
              <Link to="/">
                  <button className="close-search">Close</button>
              </Link>
              <div className="search-books-input-wrapper">
                  <input
                      type="text"
                      placeholder="Search by title, author, or ISBN"
                  />
              </div>
            </div>
          <BookList books={books} shelf={null}/>
        </div>
    );
};

export default SearchBooks;                                                         