import Book from "./Book";

const BookList=({booklist,moveBook})=>{
    return(
      <div className="bookshelf-books">
        <ol className="books-grid">
          {
            booklist.map(bk=>
                <li key={bk.id}>
                    <Book key={bk.id} book={bk} moveBook={moveBook}/>
                </li>
            )
          }
        </ol>
      </div>
    );
}

export default BookList;