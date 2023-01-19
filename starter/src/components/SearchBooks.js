import React from "react";
import SearchResults from "./SearchResults";
import {Link} from "react-router-dom";
import { useState } from "react";

const SearchBooks=({moveBook,bookSearch,searchBooks,resetSearch})=>{
   const[val,setVal]=useState("");
   const searchDynamic=(event)=>{
    
      const newValue=event.target.value;
      setVal(newValue);
      if(newValue.length >=1){
        bookSearch(event.target.value);
      }
   };

    return(<div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
              <button className="close-search" onClick={resetSearch}>Close</button>
          </Link>
          <div className="search-books-input-wrapper">
              <input
                  type="text"
                  placeholder="Search by title, author, or ISBN"
                  value={val}
                  onChange={searchDynamic}
                  autoFocus
              />
          </div>
        </div>
      <SearchResults books={searchBooks} shelf={null} moveBook={moveBook}/>
    </div>
    );
    
};

export default SearchBooks;                                                         