import Book from "./Book";

const SearchResults=({books,moveBook})=>{

    return(
        <div className="search-books-results">
            <ol className="books-grid">
                {
                    books.map((book)=>
                        <Book key={book.id} book={book} shelf="none" moveBook={moveBook} />
                    )
                };
            </ol>
        </div>
    );
};
export default SearchResults;