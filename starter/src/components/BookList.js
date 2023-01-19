import Book from "./Book";

const BookList=({booklist,shelf,moveBook})=>{
    return(
      <div className="bookshelf-books">
        <ol className="books-grid">
          {
            booklist.map(bk=>
                <li key={bk.id}>
                    <Book book={bk} shelf={bk.shelf} moveBook={moveBook}/>
                </li>
            )
          }
        </ol>
      </div>
    );
}

export default BookList;