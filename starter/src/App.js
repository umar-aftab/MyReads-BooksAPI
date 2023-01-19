import "./App.css";
import React from "react";
import { useEffect, useState } from "react";
import SearchBooks from "./components/SearchBooks";
import {Routes,Route,BrowserRouter} from "react-router-dom";
import MyReadsHeader from "./components/MyReadsHeader";
import * as BooksAPI from "./BooksAPI";

function App() {
  const[books,setBooks]= useState([]);
  const[searchBooks,setSearchBooks] = useState([]);

  useEffect(()=>{
    BooksAPI.getAll()
    .then((books)=>{
      //console.log(books);
      setBooks(books);
    }).catch((e)=>{
      //console.log(e);
    });
  },[]);

  const shelves = [
    {
      title:"Currently Reading",
      shelf:'currentlyReading',
      key:1
    },
    {
      title:"Want to Read",
      shelf:'wantToRead',
      key:2
    }, 
    {
      title:"Read",
      shelf:'read',
      key:3
    }
  ];
  const moveBook=(book,shelf)=>{
    const booksUpdated=books.map(b=>{
      if(b.id === book.id){
        b.shelf= shelf;
        return book;
      }
      return b;
    });
    setBooks(booksUpdated);
    BooksAPI.update(book,shelf).then(data=>console.log(data));
  };

  const bookSearch=(book)=>{
    if(!book.trim()){
      setSearchBooks([]);
    }
    if(book.length>0){
      BooksAPI.search(book).then(data=>{
        if(data.error){
          setSearchBooks([]);
        }else{
          setSearchBooks(data);
        }
      });
    }else{
      setSearchBooks([]);
    }  
  };

  const resetSearch=()=>{
    setSearchBooks([]);
  }

  return (
    <div className="app">      
          <BrowserRouter>
            <Routes>
              <Route path="/search" element={<SearchBooks myBooks={books} moveBook={moveBook} bookSearch={bookSearch} searchBooks={searchBooks} resetSearch={resetSearch}/>} />
              <Route exact path="/" element={<MyReadsHeader shelves={shelves} books={books} moveBook={moveBook} />} />
            </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
