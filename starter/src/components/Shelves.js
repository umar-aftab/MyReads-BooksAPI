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
                            <div className="bookshelf" key={Math.random()}>
                                <h2 className="bookshelf-title">{shel.title}</h2>
                                <BookList key={shel.id} booklist={bookSelector(books,shel.shelf)} moveBook={moveBook}/>
                            </div>        
                    )
                }            
            </div>
            );

};

export default Shelves;