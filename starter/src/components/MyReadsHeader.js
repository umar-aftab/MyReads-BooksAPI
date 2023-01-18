import React from "react";
import Shelves from "./Shelves";
import { Link } from "react-router-dom";

const MyReadsHeader=({shelves,books,moveBook})=>{
    const [showSearchPage,setShowSearchPage]=useState(false);
    return(
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads -Version (UmarAftab)</h1>
                <div className="list-books-content">
                    <Shelves shelves={shelves} books={books} moveBook={moveBook} /> 
                </div>
            </div>
            <div className="open-search">
                <Link to="search">
                    <button>Add a Book</button>
                </Link>
            </div>
        </div>
        
    );

};

export default MyReadsHeader;