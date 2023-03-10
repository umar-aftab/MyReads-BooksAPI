import React from "react";
import BookShelfEditor from "./BookShelfEditor";

const Book=({book,moveBook})=>{
    return(
        <div className="book">
              <div className="book-top">
                <div
                  className="book-cover"
                  style={{
                    width: 128,
                    height: 193,
                    backgroundImage:`url(${book.imageLinks?.thumbnail})`,
                  }}
                ></div>
                <BookShelfEditor key={book.id} book={book} moveBook={moveBook}/>

              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.author}</div>
        </div>
    );
};

export default Book;