import React from "react";
import BookList from "./BookList";

const Shelves=({shelves,books})=>{
    return(
            <div className="list-books-content"> 
                {
                    shelves.map((shel)=>
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">{shel.title}</h2>
                                <BookList key={shel.key} booklist={books.filter(book=>book.shelf === shel.shelf)} shelf={shel}/>
                            </div>        
                    )
                }            
            </div>
            );

};

export default Shelves;