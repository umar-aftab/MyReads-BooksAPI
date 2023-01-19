import Book from "./Book";

const SearchResults=({myBooks,searchBooks,moveBook})=>{
    const changedBooks=searchBooks.map(book=>{
        myBooks.map(b=>{
            if(b.id===book.id){
                book.shelf=b.shelf;
            }
            return b;
        });
        //console.log(book.name,book.shelf)
        return book;
    });
    return(
        <div className="search-books-results">
            <ol className="books-grid">
                {
                    changedBooks.map((book)=>
                        <Book key={book.id} book={book} shelf={book.shelf ? book.shelf: 'none'} moveBook={moveBook} />
                    )
                };
            </ol>
        </div>
    );
};
export default SearchResults;