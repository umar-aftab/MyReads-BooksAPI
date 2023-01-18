import React from "react";
import BookList from "./BookList";

const Shelves=({books,shelves,moveBook})=>{
    const bookSelector=(books,shelf)=>{
        const sortedBks= books.filter(book=>book.shelf === shelf);
        return sortedBks;
    };
    return(
            <div>
                {
                    shelves.map((shel)=>
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">{shel.title}</h2>
                                <BookList booklist={bookSelector(books,shel.shelf)} shelf={shel} moveBook={moveBook}/>
                            </div>        
                    )
                }            
            </div>
            );

};

export default Shelves;