import "./App.css";
import React from "react";
import { useEffect, useState } from "react";
import SearchBooks from "./components/SearchBooks";
import {Routes,Route,BrowserRouter} from "react-router-dom";
import MyReadsHeader from "./components/MyReadsHeader";
import * as BooksAPI from "./BooksAPI";

function App() {
  const[books,setBooks]= useState([]);
  useEffect(()=>{
    BooksAPI.getAll()
    .then((books)=>{
      console.log(books);
      setBooks(books);
    }).catch((e)=>{
      console.log(e);
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
  };

  return (
    <div className="app">      
          <BrowserRouter>
            <Routes>
              <Route path="/search" element={<SearchBooks book={books} moveBook={moveBook}/>} />
              <Route exact path="/" element={<MyReadsHeader shelves={shelves} books={books} moveBook={moveBook}/>} />
            </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
