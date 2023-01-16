import React from "react";
import BookList from "./BookList";

const Shelves=({shelves,books})=>{
    return(
            <div> 
                {
                    shelves.map((shel)=>
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">{shel.title}</h2>
                                <BookList booklist={books.filter(book=>book.shelf === shel.shelf)} />
                            </div>        
                    )
                }            
            </div>
            );

};

export default Shelves;