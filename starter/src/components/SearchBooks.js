import React from "react";
import SearchResults from "./SearchResults";
import {Link} from "react-router-dom";

const SearchBooks=({moveBook,findBook,bookSearch,searchBooks})=>{

    return(<div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
              <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
              <input
                  type="text"
                  placeholder="Search by title, author, or ISBN"
                  value={findBook}
                  onChange={(event)=>bookSearch(event.target.value)}
                  autoFocus
              />
          </div>
        </div>
      <SearchResults books={searchBooks} shelf={null} moveBook={moveBook}/>
    </div>
    );
    
};

export default SearchBooks;                                                         